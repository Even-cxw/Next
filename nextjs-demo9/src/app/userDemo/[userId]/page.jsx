
async function UserDetail({params:{userId}}) {
  const data = await getUserDetail(userId)
  
  return (
    <div>
      <div>姓名：{data.name}</div>
      <div>描述：{data.describe}</div>
    </div>
  );
}
export async function getUserDetail(userId) {
  let data  = await fetch(`http://localhost:3000/user/${userId}`,{next:{revalidate:5}})
  return data.json()
}
export default UserDetail;