
async function User() {

  const data = await getUser()
  
  return (
    <div>
      {data.map(item => (<div key={item.id} className="leading-8 rounded-lg border my-5 mx-5 py-2 px-10">
        <div className="text-red-200">姓名：{item.name}</div>
        <div>年龄：{item.age}</div>
        <div>性别：{item.gender}</div>
      </div>))}
      User
    </div>
  );
}


export async function getUser() {
  let userList = await fetch('http://localhost:3000/user',{next:{}})
  return userList.json();
}

export default User;