/**
 * 表单验证工具函数
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * 验证邮箱格式
 * @param email 邮箱地址
 * @returns 验证结果
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, error: '邮箱地址不能为空' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: '请输入有效的邮箱地址' };
  }

  return { isValid: true };
}

/**
 * 验证密码
 * @param password 密码
 * @param minLength 最小长度，默认为6
 * @returns 验证结果
 */
export function validatePassword(
  password: string,
  minLength: number = 6
): ValidationResult {
  if (!password) {
    return { isValid: false, error: '密码不能为空' };
  }

  if (password.length < minLength) {
    return {
      isValid: false,
      error: `密码至少需要${minLength}个字符`,
    };
  }

  return { isValid: true };
}

/**
 * 验证用户名
 * @param username 用户名
 * @returns 验证结果
 */
export function validateUsername(username: string): ValidationResult {
  if (!username) {
    return { isValid: false, error: '用户名不能为空' };
  }

  if (username.length < 3) {
    return { isValid: false, error: '用户名至少需要3个字符' };
  }

  if (username.length > 20) {
    return { isValid: false, error: '用户名最多20个字符' };
  }

  const usernameRegex = /^[a-zA-Z0-9_-]+$/;
  if (!usernameRegex.test(username)) {
    return {
      isValid: false,
      error: '用户名只能包含字母、数字、下划线和破折号',
    };
  }

  return { isValid: true };
}

/**
 * 验证电话号码（中国）
 * @param phone 电话号码
 * @returns 验证结果
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, error: '电话号码不能为空' };
  }

  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: '请输入有效的电话号码' };
  }

  return { isValid: true };
}

/**
 * 密码强度检查
 * @param password 密码
 * @returns 强度等级: 'weak' | 'medium' | 'strong'
 */
export function checkPasswordStrength(
  password: string
): 'weak' | 'medium' | 'strong' {
  if (!password) return 'weak';

  let strength = 0;

  // 长度检查
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;

  // 字符类型检查
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[^a-zA-Z\d]/.test(password)) strength += 1;

  if (strength <= 2) return 'weak';
  if (strength <= 4) return 'medium';
  return 'strong';
}
