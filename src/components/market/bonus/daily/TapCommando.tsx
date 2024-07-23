"use client"

import { usePointsStore } from '@/store/PointsStore'
import { useBoostersStore } from '@/store/useBoostrsStore'
import { Snowflake } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const TapCommando = () => {
    const { tapCommando, decreaseTapCommando, secondsLeft, setSecondsLeft } = useBoostersStore()
    const { tapInBoostMode } = usePointsStore()
    const [isTapCommandoActive, setIsTapCommandoActive] = useState(false)

    const handleTapCommando = () => {
        if (tapCommando > 0) {
            setIsTapCommandoActive(true)
            setSecondsLeft(30)
            decreaseTapCommando()

            setTimeout(() => setIsTapCommandoActive(false), 7000)
            toast.success("Tap Commando Activated")
        }
    }

    return (
        <button onClick={handleTapCommando} className='w-1/2 bg-black/80 backdrop-blur-sm rounded-2xl py-4 flex flex-col items-center text-left hover:bg-black/70 transition duration-100 hover:border-orange-300 border-black border-[1.5px]'>
            <div className='flex items-center gap-3'>
                <div className='text-2xl text-white'>
                    <Snowflake />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-extrabold text-lg text-white'>
                        Tap Commander
                    </h2>
                    <p className='font-medium text-white/60'>
                        {tapCommando}/3
                    </p>
                </div>
            </div>
        </button>
    )
}

export default TapCommando