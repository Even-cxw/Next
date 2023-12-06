
"use client"
// import { Button, Switch } from 'antd';
const { Button, Switch } = require('antd');
export default function Antd() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
