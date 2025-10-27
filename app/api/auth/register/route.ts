/**
 * 注册API路由示例
 * 这是一个示例实现，实际使用需要连接到真实的数据库和认证服务
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // 验证输入
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: '所有字段都是必需的' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '邮箱格式不正确' },
        { status: 400 }
      );
    }

    // 验证密码长度
    if (password.length < 6) {
      return NextResponse.json(
        { error: '密码至少需要6个字符' },
        { status: 400 }
      );
    }

    // 验证用户名
    if (name.length < 2) {
      return NextResponse.json(
        { error: '用户名至少需要2个字符' },
        { status: 400 }
      );
    }

    // 这里应该检查邮箱是否已存在（从数据库）
    // const existingUser = await db.users.findOne({ email });
    // if (existingUser) {
    //   return NextResponse.json(
    //     { error: '该邮箱已被注册' },
    //     { status: 409 }
    //   );
    // }

    // 这里应该创建新用户（保存到数据库）
    // const newUser = await db.users.create({
    //   email,
    //   password: hashedPassword,
    //   name,
    //   createdAt: new Date(),
    // });

    // 模拟成功注册
    return NextResponse.json(
      {
        success: true,
        message: '注册成功',
        user: {
          email,
          name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json({ error: '注册失败' }, { status: 500 });
  }
}
