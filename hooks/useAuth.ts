/**
 * 认证自定义Hook
 */

import { useState, useCallback } from 'react';

export interface User {
  id?: string;
  email: string;
  name?: string;
  rememberMe?: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

/**
 * 自定义Hook：管理认证状态
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  });

  /**
   * 登陆函数
   */
  const login = useCallback(
    async (email: string, password: string, rememberMe: boolean = false) => {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        // 这里应该调用实际的API
        // const response = await fetch('/api/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, password }),
        // });

        // 模拟API调用
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const user: User = {
          email,
          name: email.split('@')[0],
          rememberMe,
        };

        setAuthState({
          user,
          isLoading: false,
          error: null,
          isAuthenticated: true,
        });

        // 保存到localStorage（如果勾选记住我）
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        return { success: true, user };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : '登陆失败，请重试';
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
          isAuthenticated: false,
        }));
        return { success: false, error: errorMessage };
      }
    },
    []
  );

  /**
   * 登出函数
   */
  const logout = useCallback(() => {
    setAuthState({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,
    });
    localStorage.removeItem('rememberedEmail');
  }, []);

  /**
   * 注册函数
   */
  const register = useCallback(
    async (email: string, password: string, name: string) => {
      setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        // 这里应该调用实际的API
        // const response = await fetch('/api/register', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email, password, name }),
        // });

        // 模拟API调用
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const user: User = { email, name };

        setAuthState({
          user,
          isLoading: false,
          error: null,
          isAuthenticated: true,
        });

        return { success: true, user };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : '注册失败，请重试';
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
          isAuthenticated: false,
        }));
        return { success: false, error: errorMessage };
      }
    },
    []
  );

  /**
   * 获取保存的邮箱
   */
  const getRememberedEmail = useCallback((): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('rememberedEmail');
    }
    return null;
  }, []);

  return {
    ...authState,
    login,
    logout,
    register,
    getRememberedEmail,
  };
}
