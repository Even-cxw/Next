"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useChekLogin() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("nextToken");
    if (!token) {
      router.push("/login", { scroll: false });
    }
  });
}

