import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthState {
    userId: string | null;
    token: string | null;
    setAuth: (userId: string, token: string) => void;
    clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            userId: null,
            token: null,
            setAuth: (userId, token) => set({ userId, token }),

            clearAuth: () => set({ userId: null, token: null }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: state => ({
                userId: state.userId,
                token: state.token,
            }),
        },
    ),
);

export default useAuthStore;
