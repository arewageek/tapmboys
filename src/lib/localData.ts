"use client";
import { useCookie } from "next-cookie";

export const storeLocal = ({
  name,
  data,
}: {
  name: string;
  data: string | number | boolean;
}) => {
  const cookies = useCookie();

  cookies.set(name, `${data}`);
};

export const getLocalData = ({
  name,
}: {
  name: string;
}): string | undefined | unknown => {
  const cookies = useCookie();

  const data = cookies.has(`${name}`) ? cookies.get(`${name}`) : "";
  return data;
};
