"use client"

import { usePointsStore } from '@/store/PointsStore'
import Image from 'next/image'
import React from 'react'

const PointsTracker = () => {
    const { points } = usePointsStore()

    return (
        <div className='font-bold text-5xl flex items-center gap-2 text-white'>
            <span className='text-6xl'>
                <Image src="/assets/images/planet.png" height={50} width={50} alt="" />
            </span>
            {points.toLocaleString()}
        </div>
    )
}

export default PointsTracker