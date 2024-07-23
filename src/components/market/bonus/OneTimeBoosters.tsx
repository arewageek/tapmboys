import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FaCaretRight, FaStarAndCrescent } from 'react-icons/fa'

const OneTimeBoosters = () => {
    return (
        <div className='py-10 w-full'>
            <h3 className='text-white text-2xl font-bold'>
                Boosters
            </h3>

            <div className='flex gap-4 flex-col overflow-y-auto h-[40vh]'>
                <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
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
                                        15000
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level 2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>

                <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
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
                                        500
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
                </div>

                <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
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
                                        20000
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        Level 1
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