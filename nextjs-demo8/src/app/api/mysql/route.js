// import { pool } from "@/lib/db.js";
import { NextResponse } from "next/server";
import mysql from "serverless-mysql";

// export const pool = mysql({
//   config: {
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     port: process.env.MYSQL_PORT,
//     database: process.env.MYSQL_DATABASE,
//   },
// });

export const pool = mysql({
  config: {
    host: '47.92.5.56',
    user: 'Even',
    password: '1chenxueweiB',
    port: 3306,
    database: 'even',
  },
});

export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM router");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const { name, description, price } = await request.json();
    console.log(name, description, price);

    const result = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return NextResponse.json({ name, description, price, id: result.insertId });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request) {
  // console.log("🚀 ~ file: route.js:52 ~ PUT ~ request:", request)
  // console.log("🚀 ~ file: route.js:52 ~ PUT ~ params:", params)
  // const { searchParams } = new URL(request.url)
  // console.log("111111111111")
  // const id = searchParams.get('name')
  // // console.log("🚀 ~ file: route.js:55 ~ PUT ~ searchParams:", searchParams)
  // console.log("🚀 ~ file: route.js:57 ~ PUT ~ id:", id)

  // const data = await request.json();

  try {
    console.log("111111111111")
    await pool.query("UPDATE router SET name = ? WHERE id = ?", ['表单3', 2]);
    // await pool.query("UPDATE router SET name = '表单4' WHERE id = 2");
    return NextResponse.json({
      // ...data,
      // id: params.id,
    });
  } catch (error) {
    console.log("errot",error);
    return NextResponse.json({ message: error.message });
  }
}