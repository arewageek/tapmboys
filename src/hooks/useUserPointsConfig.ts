"use client";
import { creditProfitPerHour, getUserConfig } from "@/actions/user.actions";
import { useBoostersStore } from "@/store/useBoostrsStore";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useUserPointsConfig = () => {
  const {
    energyCapacity,
    setEnergyCapacity,
    rechargeVelocity,
    setRechargeVelocity,
    multiClickLevel,
    setMultiClickLevel,
  } = useBoostersStore();

  useEffect(() => {
    const user = window.localStorage.getItem("authToken");

    async function update() {
      const config = await getUserConfig(`${user}`);
      const currentState = config.user;

      if (energyCapacity < currentState.capacity) {
        setEnergyCapacity(currentState.capacity);
      }
      if (rechargeVelocity < currentState.recharge) {
        setRechargeVelocity(currentState.recharge);
      }
      if (multiClickLevel < currentState.clicks) {
        setMultiClickLevel(currentState.clicks);
      }
    }

    update();
  }, []);

  useEffect(() => {
    const user = window.localStorage.getItem("authToken");
    const pphReward = async () => {
      const credited = await creditProfitPerHour(user!);

      if (credited == "success") {
        toast.success("Profit Credited");
      }
    };
  }, []);
};

export default useUserPointsConfig;
