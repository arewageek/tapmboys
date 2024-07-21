import CurrentPoints from '@/components/tasks/CurrentPoints'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Rocket, Snowflake } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaCaretRight, FaStarAndCrescent } from 'react-icons/fa'

const BonusPage = () => {
    return (
        <section className='flex items-center flex-col justify-center px-0 text-white/60'>
            <CurrentPoints />

            <div className='flex flex-col gap-2 w-full'>
                <h2 className='font-bold text-xl text-white'>Daily Boosters</h2>
                <div className='flex gap-3'>
                    <button className='w-1/2 bg-black/80 backdrop-blur-sm rounded-2xl py-4 flex flex-col items-center text-left hover:bg-black/70 transition duration-100 hover:border-orange-300 border-black border-[1.5px]'>
                        <div className='flex items-center gap-3'>
                            <div className='text-2xl text-white'>
                                <Snowflake />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='font-extrabold text-lg text-white'>
                                    Tap Commander
                                </h2>
                                <p className='font-medium text-white/60'>
                                    3/3
                                </p>
                            </div>
                        </div>
                    </button>

                    <button className='w-1/2 bg-black/80 backdrop-blur-sm rounded-2xl py-4 flex flex-col items-center text-left hover:bg-black/70 transition duration-100 hover:border-orange-300 border-black border-[1.5px]'>
                        <div className='flex items-center gap-3'>
                            <div className='text-2xl text-white'>
                                <Rocket />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='font-extrabold text-lg text-white'>
                                    Fuel Resupply
                                </h2>
                                <p className='font-medium text-white/60'>
                                    3/3
                                </p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className='py-10 w-full'>
                <h3 className='text-white text-2xl font-bold'>
                    Boosters
                </h3>

                <div className='flex gap-4 flex-col overflow-y-auto h-[40vh]'>
                    <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                        <div className='w-full flex items-center gap-x-3'>
                            <div className='text-5xl'>
                                <FaStarAndCrescent />
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
                                <FaStarAndCrescent />
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
                                <FaStarAndCrescent />
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

                    <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                        <div className='w-full flex items-center gap-x-3'>
                            <div className='text-5xl'>
                                <FaStarAndCrescent />
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

                    <div className='w-full bg-black/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                        <div className='w-full flex items-center gap-x-3'>
                            <div className='text-5xl'>
                                <FaStarAndCrescent />
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
        </section>
    )
}

export default BonusPage