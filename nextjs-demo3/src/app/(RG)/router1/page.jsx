"use client"
import { useRouter } from 'next/navigation'
function CounterControl(props) {
  const { count, name, age, updataState, gender} = props;
  const router = useRouter()
  const addAge = () => {
    let newAge =age + 1;
    updataState({age:newAge})
  }

  const addCount = () => {
    let newCount =count + 1;
    updataState({count:newCount})
  }

  const routerGo = () => {
    router.push('/redux4', { scroll: false })
  }

  return (
    <div>
      <div>
        ----
        <button variant="outlined" onClick={routerGo}>
          uerRouter路由跳转
        </button>
      </div>
    </div>
  );
}

// 优化
export default CounterControl