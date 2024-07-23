import { Rocket, Snowflake } from 'lucide-react'
import React from 'react'
import FuelRefill from './daily/FuelRefill'
import TapCommando from './daily/TapCommando'

const DailyBoosters = async () => {

    // const boosters = +

    return (
        <div className='flex flex-col gap-2 w-full'>
            <h2 className='font-bold text-xl text-white'>Daily Boosters</h2>
            <div className='flex gap-3'>
                <TapCommando />

                <FuelRefill />
            </div>
        </div>
    )
}

export default DailyBoosters