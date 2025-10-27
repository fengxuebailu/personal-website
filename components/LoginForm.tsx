'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './LoginForm.module.css';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = '请输入邮箱地址';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = '请输入密码';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少需要6个字符';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setIsSubmitted(true);
      console.log('登陆成功:', {
        email: formData.email,
        rememberMe: formData.rememberMe,
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ email: '', password: '', rememberMe: false });
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      setErrors({ email: '登陆失败，请重试' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>登陆成功!</h3>
        <p>欢迎回来</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
          placeholder="输入你的邮箱地址"
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
          placeholder="输入你的密码"
          className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
          disabled={isLoading}
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className={styles.checkbox}
            disabled={isLoading}
          />
          <span>记住我</span>
        </label>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className={styles.spinner}></span>
            正在登陆...
          </>
        ) : (
          '登陆'
        )}
      </button>

      <div className={styles.footer}>
        <a href="#forgot-password">忘记密码？</a>
        <span className={styles.separator}>|</span>
        <a href="#signup">注册账户</a>
      </div>
    </form>
  );
}
