"use client";
import {
  decrement,
  increment,
  selectCounter,
} from "@/store/modules/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CounterControl() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const handleChangeCounter = (type) => {
    dispatch(type === "ADD" ? increment() : decrement());
  };

  return (
    <div>
      <div variant="h1">{counter}</div>
      <div>
        <button variant="outlined" onClick={() => handleChangeCounter("ADD")}>
          ADD
        </button>
        <button
          variant="outlined"
          onClick={() => handleChangeCounter("MINUS")}
          sx={{ ml: 2 }}
        >
          MINUS
        </button>
      </div>
    </div>
  );
}
