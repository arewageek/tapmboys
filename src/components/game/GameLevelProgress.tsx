'use client'

import { useState } from 'react'
import { Progress } from '../ui/progress'
import Image from 'next/image'
import { usePointsStore } from '@/store/PointsStore'
import { useBoostersStore } from '@/store/useBoostrsStore'


const GameLevelProgress = () => {
    const { points, currentTapsLeft, nextBenchmark } = usePointsStore()
    const { energyCapacity } = useBoostersStore()

    return (
        <>
            <div className='flex items-center gap-2 text-lg'>

                <div>
                    <Image src="/assets/images/planet.png" height={35} width={35} alt="" />
                </div>
                <div>
                    <span className='font-extrabold text-white text-3xl'>{currentTapsLeft}</span>/{energyCapacity}
                </div>
            </div>

            <div className='w-full'>
                <Progress draggable={false} value={(currentTapsLeft / energyCapacity) * 100} max={100} className="w-full bg" />
            </div>
        </>
    )
}

export default GameLevelProgress