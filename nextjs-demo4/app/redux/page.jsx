"use client";
import {
  decrement,
  increment,
  selectCounter,
} from "@store/modules/counterSlice";
import {  Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function CounterControl() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleChangeCounter = (type) => {
    dispatch(type === "ADD" ? increment() : decrement());
  };

  return (
    <div>
      <div>{counter}</div>
      <div>
        <Button variant="outlined" onClick={() => handleChangeCounter("ADD")}>
          ADD
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleChangeCounter("MINUS")}
          sx={{ ml: 2 }}
        >
          MINUS
        </Button>
      </div>
    </div>
  );
}
