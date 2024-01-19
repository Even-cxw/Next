
import Link from "next/link";
async function UserDemo() {

  const data = await getUser()
  // console.log("🚀 ~ file: page.jsx:6 ~ UserDemo ~ data:", data)
   
  return (
    <div>
      {data.map(item =>(
        <Link key={item.id} href={`/userDemo/${item.id}`}>
          <div className="rounded-lg border my-5 mx-5 px-5 py-5 leading-7 border-cyan-200">
            <div>姓名：<span className="text-red-200">{item.name}</span></div>
            <div>年龄：{item.age}</div>
            <div>性别：{item.gender}</div>
          </div>
        </Link>
      ))}
    
    </div>
  );
}

export async function getUser() {
  let data  = await fetch('http://localhost:3000/user',{next:{revalidate:5}})
  return data.json()
}

export default UserDemo;


// revalidate: 5