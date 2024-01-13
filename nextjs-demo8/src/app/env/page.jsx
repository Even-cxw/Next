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
    <div>
      Env1 - {process.env.APP_Key}
      Env2 - {process.env.devAPP_Key}
      Env3 - {process.env.NEXT_PUBLIC_TEST}
    </div>
  );
}

export default Env;