'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './RegisterForm.module.css';
import {
  validateEmail,
  validatePassword,
  validateUsername,
  checkPasswordStrength,
} from '@/utils/validation';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<'weak' | 'medium' | 'strong'>('weak');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Username validation
    const usernameValidation = validateUsername(formData.username);
    if (!usernameValidation.isValid) {
      newErrors.username = usernameValidation.error;
    }

    // Email validation
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }

    // Password validation
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.error;
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    // Terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = '必须同意条款才能注册';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };

      // Update password strength indicator
      if (name === 'password') {
        setPasswordStrength(checkPasswordStrength(value));
      }

      return updated;
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('注册失败');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
        });
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      setErrors({
        email: error instanceof Error ? error.message : '注册失败，请重试',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>注册成功!</h3>
        <p>欢迎加入我们的社区</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>创建账户</h2>

      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>
          用户名
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="输入用户名"
          className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {errors.username && (
          <span className={styles.errorMessage}>{errors.username}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          邮箱地址
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="输入邮箱地址"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          密码
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="输入密码"
          className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {formData.password && (
          <div className={styles.strengthIndicator}>
            <div className={`${styles.strengthBar} ${styles[passwordStrength]}`}></div>
            <span className={styles.strengthText}>
              {passwordStrength === 'weak'
                ? '弱'
                : passwordStrength === 'medium'
                ? '中等'
                : '强'}
            </span>
          </div>
        )}
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>
          确认密码
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="再次输入密码"
          className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {errors.confirmPassword && (
          <span className={styles.errorMessage}>{errors.confirmPassword}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className={styles.checkbox}
            disabled={isLoading}
          />
          <span>
            我同意 <a href="#terms">服务条款</a> 和 <a href="#privacy">隐私政策</a>
          </span>
        </label>
        {errors.agreeToTerms && (
          <span className={styles.errorMessage}>{errors.agreeToTerms}</span>
        )}
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner}></span>
            正在注册...
          </>
        ) : (
          '注册'
        )}
      </button>

      <div className={styles.footer}>
        <span>已有账户？</span>
        <a href="#login">立即登陆</a>
      </div>
    </form>
  );
}
