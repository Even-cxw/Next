"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  BorderOuterOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlayCircleOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";

const DMenu = () => {
  const router = useRouter();
  const [item, setItem] = useState([]);
  const onSelect = useCallback(({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log("🚀 ~ file: LMenu.jsx:12 ~ onSelect ~ item, key, keyPath, selectedKeys, domEvent:", item, key, keyPath, selectedKeys, domEvent)
    router.push('/' + key)
  }, [])

  useEffect(() => {
    setItem([
      {
        key: "dashboard/monitorManage",
        icon: <UserOutlined />,
        label: "监控管理",
        children: [
          {
            key: "dashboard/monitorList",
            icon: <BorderOuterOutlined />,
            label: "监控列表",
          },
          {
            key: "dashboard/realTimeMonitor",
            icon: <PlayCircleOutlined />,
            label: "实时监控",
          },
        ],
      },
      {
        key: "systemManage",
        icon: <VideoCameraOutlined />,
        label: "系统管理",
        children: [
          {
            key: "dashboard/userManager",
            icon: <BorderOuterOutlined />,
            label: "用户管理",
          },
          {
            key: "dashboard/roleManager",
            icon: <PlayCircleOutlined />,
            label: "角色管理",
          },
        ],
      },
    ])
  }, [])

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onSelect={onSelect}
      items={item}
    />
  );
};
export default DMenu;
