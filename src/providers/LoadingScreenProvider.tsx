"use client"

import { ReactNode, useEffect } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import useLoadingScreenStore from "@/store/loadingScreenStore"
import { usePointsStore } from "@/store/PointsStore"
import usePointsInitializer from "@/hooks/usePointsInitializer"
import useUserPointsConfig from "@/hooks/useUserPointsConfig"

const LoadingScreenProvider = ({ children }: { children: ReactNode }) => {
    const { isLoading } = useLoadingScreenStore()
    const { skin } = usePointsStore()

    usePointsInitializer()
    useUserPointsConfig()

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading])

    if (!isLoading) {
        return <LoadingScreen />
    }

    return <div className={"h-full w-screen bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: "url('" + skin + "')" }}>
        {children}
    </div >
}

export default LoadingScreenProvider