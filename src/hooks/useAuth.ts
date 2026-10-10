import useAuthStore from '@/store/useAuthStore';

export function useAuth() {
    const userId = useAuthStore(state => state.userId);
    const token = useAuthStore(state => state.token);
    const setAuth = useAuthStore(state => state.setAuth);
    const clearAuth = useAuthStore(state => state.clearAuth);

    return {
        userId,
        token,
        setAuth,
        clearAuth,
        isAuthenticated: !!token,
    };
}