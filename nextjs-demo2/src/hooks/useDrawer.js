import { useState } from 'react';

export default function useDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState(0);
  const [drawerProps, setDrawerProps] = useState({ title: '' });

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerChange = (drawerOpen, drawerMode, drawerProps) => {
    setDrawerOpen(drawerOpen);
    if (drawerMode != -1) setDrawerMode(drawerMode);
    drawerProps && setDrawerProps(drawerProps);
  };

  return {
    drawerOpen,
    drawerMode,
    drawerProps,
    handleDrawerClose,
    handleDrawerChange,
  };
}
