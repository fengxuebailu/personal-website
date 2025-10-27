/**
 * 登陆API路由示例
 * 这是一个示例实现，实际使用需要连接到真实的数据库和认证服务
 */

import { NextRequest, NextResponse } from 'next/server';

// 示例用户数据（实际应该从数据库查询）
const DEMO_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123', // 实际应该使用加密存储
    name: 'Demo User',
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 验证输入
    if (!email || !password) {
      return NextResponse.json(
        { error: '邮箱和密码都是必需的' },
        { status: 400 }
      );
    }

    // 模拟数据库查询
    const user = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: '邮箱或密码不正确' },
        { status: 401 }
      );
    }

    // 模拟生成token（实际应该使用JWT或类似机制）
    const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

    // 返回成功响应
    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: '登陆失败' }, { status: 500 });
  }
}
