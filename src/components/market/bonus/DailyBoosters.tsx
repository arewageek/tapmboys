import { Rocket, Snowflake } from 'lucide-react'
import React from 'react'

const DailyBoosters = () => {
    return (
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
    )
}

export default DailyBoosters