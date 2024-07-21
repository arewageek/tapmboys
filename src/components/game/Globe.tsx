'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePointsStore } from '@/store/PointsStore'


interface ClickCoords {
    x: number, y: number
}

const TapGlobe = () => {

    const [clickCoordinate, setClickCoordinate] = useState<ClickCoords[]>([])
    const [isTapping, setIsTapping] = useState<boolean>()

    const { addPoints, decreaseTapsLeft, tapLimit, currentTapsLeft, increaseTapsLeft } = usePointsStore()


    const handleTap = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const prevClicks = clickCoordinate

        setClickCoordinate([{ x, y }, ...prevClicks])

        // console.log({ x: e.clientX, y: e.clientY })
        // console.log({ rx: x, y: y })

        addPoints()

        decreaseTapsLeft(1)

        setIsTapping(true)
        setTimeout(() => setIsTapping(false), 2000);

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

    return (
        <div className='relative'>
            <Image src="/assets/images/planet.png" height={200} width={200} alt="" onClick={handleTap} className='transition duration-300 cursor-pointer' />

            {clickCoordinate.length > 1 && clickCoordinate.map((click, index) => <div key={index} className={`text-4xl font-bold text-orange-400 absolute tap-count-animation`} style={{
                left: click.x,
                top: click.y,
            }}>
                +1
            </div>)}
        </div>
    )
}

export default TapGlobe