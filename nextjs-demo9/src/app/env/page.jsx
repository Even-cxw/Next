// 'use client'
// import React, { useState, useEffect } from 'react';

function Env() {
  // const [loading, setLoading] = useState(false);
    console.log("🚀 ~ file: page.jsx:6 ~ Env ~ APP_Key:", process.env.APP_Key)
    console.log("🚀 ~ file: page.jsx:6 ~ Env ~ devAPP_Key:", process.env.devAPP_Key)
    console.log("🚀 ~ file: page.jsx:6 ~ Env ~ NEXT_PUBLIC_TEST:", process.env.NEXT_PUBLIC_TEST)
  
  // useEffect(() => {
  //   // console.log("🚀 ~ file: page.jsx:6 ~ Env ~ APP_Key:", process.env)
    
  //   return () => {
  //     // Cleanup code here
  //   };
  // }, []);

  return (
    <div className="flex flex-col">
      <div>
        环境变量1 - {process.env.APP_Key}
      </div>
      <div>
        环境变量2 - {process.env.devAPP_Key}
      </div>
      <div>
        环境变量3 - {process.env.NEXT_PUBLIC_TEST}
      </div>
    </div>
  );
}

export default Env;