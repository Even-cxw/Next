import { Inter } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <div>
      <h1 style={{color: 'red'}}>我是局部layout</h1>
      <br></br>
      {children}
    </div>
  );
}
