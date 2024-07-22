"use client";

import { usePointsStore } from "@/store/PointsStore";
import { useEffect } from "react";

export const useLocalPointsStorage = () => {
  const { points } = usePointsStore();
  const name = process.env.NEXT_PUBLIC_TAPPED_POINTS_KEYWORD!;
  const authToken = window.localStorage.getItem("authToken");

  const store = (points: number) => {
    // window.localStorage.setItem(`${authToken}${name}`, `${points}`);
    window.localStorage.setItem("points", `${points}`);
    // console.log("stored to session");
  };

  const get = () => {
    return window.localStorage.getItem("points");
    // return window.localStorage.getItem(`${authToken}${name}`);
  };

  useEffect(() => {
    const prevStoredPoints = window.localStorage.getItem(`${name}`);

    if (prevStoredPoints) {
      console.log(prevStoredPoints);
    } else {
      window.localStorage.setItem(`${authToken}${name}`, `${points}`);
      //   console.log("set");
    }
  }, []);

  useEffect(() => {
    // if (points % 10 == 0) {
    store(points);
    // console.log(get());
    // }
  }, [points]);
};
