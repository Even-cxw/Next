
"use client"
async function Mysql() {
  let data = await getMysql()
  console.log("🚀 ~ file: page.jsx:5 ~ Mysql ~ data:", data)

  return (
    <div>
      {
        data.map(item => (<div key={item.id}>
          name: {item.name}
        </div>))
      }
      <hr></hr>
      <button onClick={() => {changeMysql({name:'表单1'})}}>改变sql数据</button>
    </div>
  );
}

export async function getMysql() {
  const data =await fetch('http://localhost:8000/api/mysql',{next:{revalidate: 10}})
  return data.json();
}

export async function changeMysql(params) {
  const data =await fetch('http://localhost:8000/api/mysql',{
    next:{revalidate: 10},
    method: 'PUT',
    // params,
    // body: JOSN.stringify(params)
    body: params
  })
  return data.json();
}

export default Mysql;