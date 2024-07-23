"use client"

import { usePointsStore } from '@/store/PointsStore'
import { useBoostersStore } from '@/store/useBoostrsStore'
import { Rocket } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'

const FuelRefill = () => {

    const { currentTapsLeft, increaseTapsLeft } = usePointsStore()
    const { refill, decreaseRefill, energyCapacity } = useBoostersStore()

    const handleFuelRefill = () => {
        if (refill > 0) {
            const tapsToAdd = energyCapacity - currentTapsLeft
            console.log(energyCapacity)

            increaseTapsLeft(tapsToAdd)
            decreaseRefill()

            toast.success("Taps refilled" + energyCapacity)
        }
    }

    return (
        <button disabled={refill <= 0} onClick={handleFuelRefill} className='w-1/2 bg-black/80 backdrop-blur-sm rounded-2xl py-4 flex flex-col items-center text-left hover:bg-black/70 transition duration-100 hover:border-orange-300 border-black border-[1.5px]'>
            <div className='flex items-center gap-3'>
                <div className='text-2xl text-white'>
                    <Rocket />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-extrabold text-lg text-white'>
                        Fuel Resupply
                    </h2>
                    <p className='font-medium text-white/60'>
                        {refill}/3
                    </p>
                </div>
            </div>
        </button>
    )
}

export default FuelRefill