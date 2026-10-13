import { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '@/components/MyButton';
import USER_AUTH_API from '@/lib/api/auth';
import PROFILE_API from '@/lib/api/profile';
import { useAuth } from '@/hooks/useAuth';
import { RootStackParamList } from '@/navigation/types';

interface Profile {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    profileImageUrl?: string | null;
    dateOfBirth?: string | null;
    gender?: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | null;
}

function Account() {
    const { userId } = useAuth();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [logoutLoading, setLogoutLoading] = useState(false);
    const [loadError, setLoadError] = useState(false);

    const fetchProfile = useCallback(async () => {
        if (userId == null) {
            setProfile(null);
            setLoading(false);
            setLoadError(false);
            return;
        }

        setLoading(true);
        setLoadError(false);

        try {
            const response = await PROFILE_API.getProfileById(userId);

            if ('error' in response) {
                throw response.error;
            }

            const currentProfile = response.data as Profile | null;

            if (!currentProfile) {
                setProfile(null);
                Alert.alert('Profile not found', 'Your profile could not be found.');
                return;
            }
            setProfile(currentProfile);
            // Supports a plain array or a paginated Spring response.
            // const profiles: Profile[] = Array.isArray(payload)
            //     ? payload
            //     : Array.isArray(payload?.content)
            //       ? payload.content
            //       : [];

            // i already have getProfileById(id) api
            // profiles.find(item => String(item.userId) === String(userId)) ?? null;

            //  setProfile(currentProfile);
        } catch (error) {
            console.warn('Fetch profile failed:', error);
            setLoadError(true);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useFocusEffect(
        useCallback(() => {
            fetchProfile();
        }, [fetchProfile]),
    );

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);

            const response = await USER_AUTH_API.userLogout({ userId });

            if ('error' in response) {
                throw response.error;
            }

            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            console.warn('Logout failed:', error);
            Alert.alert('Logout failed', 'Please try again.');
        } finally {
            setLogoutLoading(false);
        }
    };

    return (
        <ScrollView className="flex-1 bg-gray-50" contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
            <Text className="mb-6 text-2xl font-bold text-gray-900">My Account</Text>

            <View className="mb-6 items-center rounded-2xl bg-white p-6">
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : loadError ? (
                    <>
                        <Text className="mb-3 text-center text-gray-600">Unable to load your profile.</Text>

                        <Button title="Retry" onPress={fetchProfile} />
                    </>
                ) : profile ? (
                    <>
                        {profile.profileImageUrl ? (
                            <Image source={{ uri: profile.profileImageUrl }} className="mb-4 h-24 w-24 rounded-full" />
                        ) : (
                            <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                                <Text className="text-3xl font-bold text-blue-600">
                                    {profile.firstName?.charAt(0)?.toUpperCase() || 'U'}
                                </Text>
                            </View>
                        )}

                        <Text className="mb-5 text-xl font-bold text-gray-900">
                            {profile.firstName} {profile.lastName}
                        </Text>

                        <View className="w-full gap-4">
                            <ProfileRow label="Profile ID" value={profile.id} />
                            <ProfileRow label="User ID" value={profile.userId} />
                            <ProfileRow label="Date of Birth" value={profile.dateOfBirth || 'Not added'} />
                            <ProfileRow label="Gender" value={profile.gender || 'Not added'} />
                        </View>
                    </>
                ) : (
                    <Text className="py-6 text-center text-gray-600">No profile found. Please create your profile.</Text>
                )}
            </View>

            <View className="mt-auto flex-col gap-4">
                <Button
                    title={logoutLoading ? 'Signing out...' : 'Signout'}
                    onPress={handleLogout}
                    disabled={logoutLoading}
                />
                {profile && (
                    <View className="mb-4">
                        <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

function ProfileRow({ label, value }: { label: string; value: string | number }) {
    return (
        <View className="flex-row items-center justify-between border-b border-gray-100 pb-3">
            <Text className="text-gray-500">{label}</Text>
            <Text className="ml-4 flex-1 text-right font-medium text-gray-900">{value}</Text>
        </View>
    );
}

export default Account;
