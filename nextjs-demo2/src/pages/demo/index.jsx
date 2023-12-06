import Image from 'next/image'
import CustomDrawer from '@/components/customDrawer'
import useDrawer from '@/hooks/useDrawer'
export default function Home3() {
  const { drawerMode, drawerOpen, drawerProps, handleDrawerChange, handleDrawerClose } = useDrawer();

  const handleDrawerOk = function() {
    console.log('ok')
  }
  return (
      <div>
        <div onClick={() => {handleDrawerChange(true)}}>open</div>
        demo
        <CustomDrawer
          drawerOpen={drawerOpen}
          drawerProps={drawerProps}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOk={handleDrawerOk}
        >
          <div>我是弹窗的内容</div>
        </CustomDrawer>
      </div>
  )
}
