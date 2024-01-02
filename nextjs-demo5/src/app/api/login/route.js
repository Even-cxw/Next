import { NextResponse } from "next/server"
export async function GET(request) { 
  // console.log("🚀 ~ file: route.js:2 ~ GET ~ request:", '请求')
  const res = await fetch('http://10.200.90.7/cn-api/common-usermgmt/auth/token', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}

export async function POST(request) { 
  console.log("🚀 ~ file: route.js:2 ~ GET ~ request:", '请求')
  const res = await fetch('http://10.200.90.7/cn-api/common-usermgmt/auth/token', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
      'body': {
        'password': "ENC(n9LdY651DHB4AeI8D2vw8g==)",
        'username': "admin"
      }
    },
  })
  const data = await res.json()
  console.log("🚀 ~ file: route.js:24 ~ POST ~ data:", data)
  
  // return NextResponse.json('111')
 
  return NextResponse.json({ data })
}