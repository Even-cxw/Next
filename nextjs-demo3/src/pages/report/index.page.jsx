'use client';
import { Button } from 'antd';
// const { Button } = require('antd');
function Report() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>111</div>
      <div>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      </div>
    </main>
  )
}

export default Report