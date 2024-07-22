"use client"

import { ReactNode, useEffect, useState } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import useLoadingScreenStore from "@/store/loadingScreenStore"
import { usePointsStore } from "@/store/PointsStore"

const LoadingScreenProvider = ({ children }: { children: ReactNode }) => {
    const { isLoading } = useLoadingScreenStore()
    // const localSkin = window.localStorage.getItem('skin')

    const { skin } = usePointsStore()

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading])

    // useEffect(() => {
    //     console.log('skin', skin)
    //     if (skin != null) {

    //         // setSkinImage("/assets/images/pinwheel.png")
    //         // setSkinImage("/assets/images/andromeda.jpg")
    //         // setSkinImage("/assets/images/space-bg.avif")
    //         console.log({ skin })
    //     }
    //     else {
    //         setSKin
    //     }
    // }, [skin])

    if (!isLoading) {
        return <LoadingScreen />
    }

    return <div className={"h-full w-screen bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: "url('" + skin + "')" }}>
        {children}
    </div >
}

export default LoadingScreenProvider