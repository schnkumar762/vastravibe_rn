import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary, type Asset } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import PROFILE_API from '@/lib/api/profile';
import UTILS_API from '@/lib/api/utils';
import { useAuth } from '@/hooks/useAuth';
import { RootStackParamList } from '@/navigation/types';

type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

interface Profile {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    profileImageUrl?: string | null;
    dateOfBirth?: string | null;
    gender?: Gender | null;
}

const GENDERS: Gender[] = ['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY'];

function EditProfile() {
    const { userId } = useAuth();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [profile, setProfile] = useState<Profile | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [selectedImage, setSelectedImage] = useState<Asset | null>(null);
    const [gender, setGender] = useState<Gender>('PREFER_NOT_TO_SAY');

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        let active = true;

        const loadProfile = async () => {
            if (userId == null) {
                setLoading(false);
                return;
            }

            try {
                //   const response = await PROFILE_API.getProfileById(userId);
                //  getProfileById ye chalna chahiye

                const response = await PROFILE_API.getAllProfiles();

                if ('error' in response) {
                    throw response.error;
                }

                const payload = response.data;
                const profiles: Profile[] = Array.isArray(payload)
                    ? payload
                    : Array.isArray(payload?.content)
                      ? payload.content
                      : [];

                const current = profiles.find(item => String(item.userId) === String(userId));

                if (!active) return;

                if (!current) {
                    Alert.alert('Profile not found', 'Your profile could not be found.');
                    return;
                }

                setProfile(current);
                setFirstName(current.firstName ?? '');
                setLastName(current.lastName ?? '');
                setDateOfBirth(current.dateOfBirth ?? '');
                setProfileImageUrl(current.profileImageUrl ?? '');
                setGender(current.gender ?? 'PREFER_NOT_TO_SAY');
            } catch (error) {
                console.warn('Load profile failed:', error);

                if (active) {
                    Alert.alert('Error', 'Could not load your profile.');
                }
            } finally {
                if (active) setLoading(false);
            }
        };

        loadProfile();

        return () => {
            active = false;
        };
    }, [userId]);

    const handleChooseImage = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
            quality: 0.2,
            maxWidth: 300,
            maxHeight: 300,
        });

        if (result.didCancel) return;

        if (result.errorCode) {
            Alert.alert('Image picker error', result.errorMessage || result.errorCode);
            return;
        }

        const image = result.assets?.[0];

        if (!image?.uri) {
            Alert.alert('Error', 'Could not select the image.');
            return;
        }

        setSelectedImage(image);
    };

    const handleUploadImage = async () => {
        if (!selectedImage?.uri) return;

        setUploading(true);

        try {
            const response = await UTILS_API.imageUpload({
                uri: selectedImage.uri,
                fileName: selectedImage.fileName,
                type: selectedImage.type,
            });

            if ('error' in response) {
                throw response.error;
            }

            const imageUrl = response.data?.secure_url;

            if (typeof imageUrl !== 'string' || !imageUrl) {
                throw new Error('Cloudinary secure_url missing.');
            }

            setProfileImageUrl(imageUrl);
            setSelectedImage(null);

            Alert.alert('Success', 'Image uploaded successfully.');
        } catch (error) {
            console.warn('Image upload failed:', error);
            Alert.alert('Upload failed', 'Could not upload the image.');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        if (!profile) return;

        if (!firstName.trim() || !lastName.trim()) {
            Alert.alert('Validation', 'First name and last name are required.');
            return;
        }

        if (dateOfBirth && !/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) {
            Alert.alert('Invalid date', 'Use YYYY-MM-DD format.');
            return;
        }

        if (selectedImage) {
            Alert.alert('Upload image', 'Please upload your selected image before saving.');
            return;
        }

        setSaving(true);

        try {
            const response = await PROFILE_API.updateMyProfile({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                dateOfBirth: dateOfBirth || undefined,
                profileImageUrl: profileImageUrl || undefined,
                gender,
            });

            if ('error' in response) {
                throw response.error;
            }

            Alert.alert('Success', 'Profile updated successfully.', [
                {
                    text: 'OK',
                    onPress: () => navigation.goBack(),
                },
            ]);
        } catch (error) {
            console.warn('Update profile failed:', error);
            Alert.alert('Update failed', 'Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center bg-gray-50">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!profile) {
        return (
            <View className="flex-1 items-center justify-center bg-gray-50 p-6">
                <Text className="mb-4 text-gray-600">Profile not available.</Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="font-semibold text-blue-600">Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const previewUri = selectedImage?.uri || profileImageUrl;

    return (
        <ScrollView
            className="flex-1 bg-gray-50"
            contentContainerStyle={{ padding: 20 }}
            keyboardShouldPersistTaps="handled"
        >
            <Text className="mb-6 text-2xl font-bold text-gray-900">Edit Profile</Text>

            <View className="gap-5 rounded-2xl bg-white p-5">
                <View className="items-center gap-3">
                    {previewUri ? (
                        <Image
                            source={{ uri: previewUri }}
                            className="h-28 w-28 rounded-full bg-gray-100"
                            resizeMode="cover"
                        />
                    ) : (
                        <View className="h-28 w-28 items-center justify-center rounded-full bg-blue-100">
                            <Text className="text-3xl font-bold text-blue-600">
                                {firstName.charAt(0).toUpperCase() || 'U'}
                            </Text>
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={handleChooseImage}
                        disabled={uploading || saving}
                        className="rounded-xl border border-blue-500 px-5 py-3"
                    >
                        <Text className="font-semibold text-blue-600">
                            {selectedImage ? 'Choose Another Image' : 'Choose Image'}
                        </Text>
                    </TouchableOpacity>

                    {selectedImage && (
                        <TouchableOpacity
                            onPress={handleUploadImage}
                            disabled={uploading || saving}
                            className="w-full items-center rounded-xl bg-blue-500 py-3"
                        >
                            {uploading ? (
                                <ActivityIndicator color="#FFFFFF" />
                            ) : (
                                <Text className="font-semibold text-white">Upload Image</Text>
                            )}
                        </TouchableOpacity>
                    )}
                </View>

                <Field label="First Name" value={firstName} onChangeText={setFirstName} placeholder="Enter first name" />

                <Field label="Last Name" value={lastName} onChangeText={setLastName} placeholder="Enter last name" />

                <Field
                    label="Date of Birth (YYYY-MM-DD)"
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    placeholder="2000-05-21"
                />

                <Text className="font-semibold text-gray-800">Gender</Text>

                <View className="flex-row flex-wrap gap-2">
                    {GENDERS.map(item => {
                        const selected = gender === item;

                        return (
                            <TouchableOpacity
                                key={item}
                                onPress={() => setGender(item)}
                                className={`rounded-xl border px-3 py-3 ${
                                    selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                                }`}
                            >
                                <Text className={selected ? 'font-semibold text-blue-600' : 'text-gray-700'}>
                                    {item.replaceAll('_', ' ')}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <TouchableOpacity
                    onPress={handleSave}
                    disabled={saving || uploading}
                    className={`mt-3 items-center rounded-xl py-4 ${saving || uploading ? 'bg-blue-300' : 'bg-blue-500'}`}
                >
                    <Text className="font-semibold text-white">{saving ? 'Saving...' : 'Save Changes'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

function Field({
    label,
    value,
    onChangeText,
    placeholder,
}: {
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    placeholder: string;
}) {
    return (
        <View className="gap-2">
            <Text className="font-semibold text-gray-800">{label}</Text>

            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900"
            />
        </View>
    );
}

export default EditProfile;
