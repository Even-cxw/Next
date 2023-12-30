"use client"
import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import DHeader from '@/components/layout/LHeader';
import DMenu from '@/components/layout/LMenu';
import { connect } from 'react-redux';
const { Sider, Content } = Layout;
const App = ({children, collapsed}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
            background: colorBgContainer,
        }}>
        <div className="demo-logo-vertical"  style={{height: '60px'}}/>
        <DMenu />
      </Sider>
      <Layout>
        <DHeader/>
        <Content
          style={{
            margin: '24px 0',
            height: 'calc(100vh - 112px)',
            overflowY:'scroll',
          }}
        >
          <div style={{
            margin: '0 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect(
  ({layout}) =>({...layout}),
  ({layout}) =>({...layout})  
)(App)