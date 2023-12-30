"use client"
import React, { useCallback, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { useRouter } from 'next/navigation';
const { Header} = Layout;
const DHeader = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const onExit = useCallback(() => {
    localStorage.clear()
    router.push('/login')
  }, [])

  return (
    <Header
    style={{
      padding: 0,
      background: colorBgContainer,
    }}
    >
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
    <LogoutOutlined onClick={onExit}  style={{marginLeft: 'auto'}}/>
  </Header>
  );
};
export default DHeader;