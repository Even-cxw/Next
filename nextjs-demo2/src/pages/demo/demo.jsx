import Image from 'next/image'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const { Button } = require('antd');

export default function Home3() {
  const { num } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const add = function() {
    let newNum = num + 1;
    dispatch.count.updateState({num:newNum})
  } 
  return (
      <div>
        demo - {num}
        <Button onClick={add}>Add</Button>
      </div>
  )
}
