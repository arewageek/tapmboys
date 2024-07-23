"use client"

import { usePointsStore } from "@/store/PointsStore"
import { useEffect } from "react"

const usePointsInitializer = () => {

    const { points, addPoints, initializePoints } = usePointsStore()

    useEffect(() => {
        let initialPoints = window.localStorage.getItem("points")
        const intPoints = initialPoints ? Number(initialPoints) : 0

        if (points === 0) {
            intPoints > 0 && initializePoints(intPoints)
        }
    }, [])
}

export default usePointsInitializer;