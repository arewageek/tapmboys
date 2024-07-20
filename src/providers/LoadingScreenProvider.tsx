"use client"

import { ReactNode, useEffect, useState } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import useLoadingScreenStore from "@/store/loadingScreenStore"

const LoadingScreenProvider = ({ children }: { children: ReactNode }) => {
    const { isLoading } = useLoadingScreenStore()

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading])

    if (!isLoading) {
        return <LoadingScreen />
    }

    return <div className="bg-[url('/assets/images/space-bg.avif')] h-screen w-screen bg-no-repeat bg-cover bg-center">
        {children}
    </div>
}

export default LoadingScreenProvider