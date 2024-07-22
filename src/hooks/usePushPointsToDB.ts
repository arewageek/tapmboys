"use client";

import { updatePointsInDB } from "@/actions/points.actions";
import { usePointsStore } from "@/store/PointsStore";
import { useEffect } from "react";

export const usePushPointsToDB = () => {
  const name = process.env.NEXT_PUBLIC_TAPPED_POINTS_KEYWORD!;

  const { points } = usePointsStore();
  const user = window.localStorage.getItem("authToken");
  const push2db = async () => {
    const done = await updatePointsInDB({ points, id: user! });
    console.log({ status: done });
    return done;
  };

  useEffect(() => {
    if (points % 100 == 0) {
      const done = push2db();
    }
  }, [points]);
};
