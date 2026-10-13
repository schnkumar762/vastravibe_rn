import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthState {
    userId: string | null;
    profileId: number | null | string;
    token: string | null;
    setAuth: (userId: string, token: string) => void;
    setProfileId: (profileId: number | null) => void;
    clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            userId: null,
            token: null,
            profileId: null,
            setAuth: (userId, token) => set({ userId, token }),
            setProfileId: profileId => set({ profileId }),

            clearAuth: () => set({ userId: null, token: null, profileId: null }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: state => ({
                userId: state.userId,
                token: state.token,
                profileId: state.profileId,
            }),
        },
    ),
);

export default useAuthStore;
