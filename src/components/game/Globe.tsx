'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePointsStore } from '@/store/PointsStore'
import { useLocalPointsStorage } from '@/hooks/useLocalPointsStorage'
import { usePushPointsToDB } from '@/hooks/usePushPointsToDB'
import { useBoostersStore } from '@/store/useBoostrsStore'
import useUserPointsConfig from '@/hooks/useUserPointsConfig'


interface ClickCoords {
    x: number, y: number
}

const TapGlobe = () => {

    const [clickCoordinate, setClickCoordinate] = useState<ClickCoords[]>([])
    const [isTapping, setIsTapping] = useState<boolean>()

    const { addPoints, decreaseTapsLeft, tapLimit, currentTapsLeft, increaseTapsLeft, tapInBoostMode } = usePointsStore()
    const { secondsLeft, decreaseSecondsLeft } = useBoostersStore()
    const { multiClickLevel } = useBoostersStore()

    useLocalPointsStorage()
    usePushPointsToDB()


    const handleTap = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const prevClicks = clickCoordinate

        setClickCoordinate([{ x, y }, ...prevClicks])

        console.log(secondsLeft)

        if (secondsLeft > 0) {
            tapInBoostMode(7 * multiClickLevel)
        }
        else {
            addPoints(multiClickLevel)

            decreaseTapsLeft(1)

            setIsTapping(true)
            setTimeout(() => setIsTapping(false), 2000);
        }

    }

    useEffect(() => {
        const timers = clickCoordinate.map((coords, index) =>
            setTimeout(() => {
                setClickCoordinate(clickCoordinate.filter((coords, i) => i !== index));
            }, 2000)
        );

        return () => timers.forEach(clearTimeout)
    }, [clickCoordinate])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isTapping) {
                increaseTapsLeft()
            }
        }, 2000); // Adjust interval as needed

        return () => clearInterval(intervalId);

    }, [isTapping])

    useEffect(() => {
        const intervalId = setInterval(() => secondsLeft > 0 && decreaseSecondsLeft(), 1000)
        return () => clearInterval(intervalId)
    }, [secondsLeft])

    return (
        <div className='relative'>
            <Image src="/assets/images/planet.png" height={200} width={200} alt="" onClick={handleTap} className='transition duration-300 cursor-pointer' />

            {clickCoordinate.length > 1 && clickCoordinate.map((click, index) => <div key={index} className={`text-4xl font-bold text-orange-400 absolute tap-count-animation`} style={{
                left: click.x,
                top: click.y,
            }}>
                +{(secondsLeft > 0 ? 7 : 1) * multiClickLevel}
            </div>)}
        </div>
    )
}

export default TapGlobe