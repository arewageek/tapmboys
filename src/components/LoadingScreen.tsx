'use client'

import useLoadingScreenStore from "@/store/loadingScreenStore"
import { useEffect, useState } from "react"

const LoadingScreen = () => {

    const [value, setValue] = useState(0)
    const { setIsLoading, isLoading } = useLoadingScreenStore()

    useEffect(() => {
        setTimeout(() => {
            value <= 99 && setValue(() => value + 1)
        }, 10)
    }, [value])

    useEffect(() => {
        value >= 99 && setIsLoading(false);
    }, [value])

    useEffect(() => {
        console.log({ isLoading })
    }, [isLoading])

    return (
        <main className='h-screen w-screen bg-primary flex flex-col gap-[30px] items-center justify-center text-white font-bold text-xl'>
            <div>
                Loading...
            </div>
            <div>
                {value}%
            </div>
        </main>
    )
}

export default LoadingScreen