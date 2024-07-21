import Image from 'next/image'
import React from 'react'

const StatsPageBonu = () => {
    return (
        <section className='h-[90%] flex flex-col items-center justify-around px-0'>
            <div className='text-center flex gap-3 items-center justify-center'>
                <Image src="/assets/images/planet.png" height={60} width={60} alt="" />
                <h2 className='text-5xl font-bold text-orange-200'>
                    2.75B
                </h2>
            </div>

            <div className='text-center'>
                <h6 className='text-lg font-medium'>
                    Total Clicks
                </h6>
                <h3 className='font-bold text-4xl text-center text-orange-200'>
                    100,000,000
                </h3>
            </div>

            <div className='text-center'>
                <h6 className='text-lg font-medium'>
                    Total Astronauts
                </h6>
                <h3 className='font-bold text-4xl text-center text-orange-200'>
                    100,000
                </h3>
            </div>

            <div className='text-center'>
                <h6 className='text-lg font-medium'>
                    Daily Astronauts
                </h6>
                <h3 className='font-bold text-4xl text-center text-orange-200'>
                    100,000
                </h3>
            </div>

            <div className='text-center'>
                <h6 className='text-lg font-medium'>
                    Active Astronauts
                </h6>
                <h3 className='font-bold text-4xl text-center text-orange-200'>
                    100,000
                </h3>
            </div>
        </section>
    )
}

export default StatsPageBonu