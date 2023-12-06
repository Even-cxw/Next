// import { Button, Col, Drawer, Row } from 'antd';
import React from 'react';
const { Button, Col,Drawer,Row } = require('antd');

export default function CustomDrawer({children, drawerOpen, handleDrawerOk, handleDrawerClose, drawerProps}) {
  const CustomDrawerFooter = !drawerProps?.hiddenFooter ? (
    <Row justify="end" gutter={8}>
      <Col>
        <Button onClick={handleDrawerClose}>取消</Button>
      </Col>
      <Col>
        <Button type="primary" onClick={handleDrawerOk}>
          确认
        </Button>
      </Col>
    </Row>
  ) : (
    ''
  );
  return (
    <Drawer
      {...drawerProps}
      placement="right"
      onClose={handleDrawerClose}
      open={drawerOpen}
      footer={CustomDrawerFooter}
    >
      {children}
    </Drawer>
  );
}
