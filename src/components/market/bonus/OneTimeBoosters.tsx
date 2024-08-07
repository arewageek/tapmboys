"use client"

import { Button } from '@/components/ui/button'
import { usePointsStore } from '@/store/PointsStore'
import { useBoostersStore } from '@/store/useBoostrsStore'
import Image from 'next/image'
import React from 'react'
import { FaCaretRight, FaStarAndCrescent } from 'react-icons/fa'
import { toast } from 'react-toastify'

const OneTimeBoosters = () => {
    const { multiClickLevel, energyCapacity, rechargeVelocity, setRechargeVelocity, setMultiClickLevel, setEnergyCapacity } = useBoostersStore()
    const { points, reducePoints } = usePointsStore()

    const handleMultiTapLimitIncrease = () => {
        if (multiClickLevel * 1500 <= points) {
            reducePoints(1500 * multiClickLevel)
            setMultiClickLevel(multiClickLevel + 1)
            toast.success("Tap Limit increased")
        }
        else {
            toast.error("Not enough points")
        }
    }


    const handleEnergyCapacityIncrease = () => {
        if (energyCapacity * 2 <= points) {
            reducePoints(energyCapacity * 2)
            setEnergyCapacity(energyCapacity * 2)
            toast.success("Energy Capacity increased to " + energyCapacity * 2)
        }
        else {
            toast.error("Not enough points")
        }
    }


    const handleRechargeVelocityIncrease = () => {
        if (rechargeVelocity * 1600 <= points) {
            reducePoints(1600 * rechargeVelocity)
            setRechargeVelocity(rechargeVelocity + 1)
            toast.success("Recharge Velocity increased")
        }
        else {
            toast.error("Not enough points")
        }
    }

    return (
        <div className='py-10 w-full'>
            <h3 className='text-white text-2xl font-bold'>
                Boosters
            </h3>

            <div className='flex gap-4 flex-col overflow-y-auto h-[40vh]'>
                <div onClick={handleMultiTapLimitIncrease} className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                    <div className='w-full flex items-center gap-x-3'>
                        <div className='text-5xl'>
                            <Image src="/assets/images/bot1.png" height={80} width={80} alt="" />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <h2 className='font-semibold text-md text-white'>
                                Auto Miner Bot
                            </h2>
                            <div className='flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        {(20000).toLocaleString()}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>

                <div onClick={handleMultiTapLimitIncrease} className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                    <div className='w-full flex items-center gap-x-3'>
                        <div className='text-5xl'>
                            <Image src="/assets/images/clicks.png" height={80} width={80} alt="" />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <h2 className='font-semibold text-md text-white'>
                                Multi-Click Thruster
                            </h2>
                            <div className='flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        {(1500 * (multiClickLevel)).toLocaleString()}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level {multiClickLevel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>

                <div onClick={handleEnergyCapacityIncrease} className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                    <div className='w-full flex items-center gap-x-3'>
                        <div className='text-5xl'>
                            <Image src="/assets/images/power.png" height={80} width={80} alt="" />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <h2 className='font-semibold text-md text-white'>
                                Energy Capacity
                            </h2>
                            <div className='flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        {(energyCapacity * 2).toLocaleString()}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level {(energyCapacity / 500).toFixed()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>

                <div onClick={handleRechargeVelocityIncrease} className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                    <div className='w-full flex items-center gap-x-3'>
                        <div className='text-5xl'>
                            <Image src="/assets/images/recharge.png" height={80} width={80} alt="" />
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <h2 className='font-semibold text-md text-white'>
                                Recharge Velocity
                            </h2>
                            <div className='flex items-center gap-4'>
                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        {(1600 * rechargeVelocity).toLocaleString()}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level {(rechargeVelocity)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OneTimeBoosters