import Image from 'next/image'
import React from 'react'
import { FaCoins } from 'react-icons/fa'

export type ProductType = {
    image: string,
    name: string,
    profitPerHour: number,
    level: number,
    cost: number
}

const EachProduct = ({
    image, name, profitPerHour, level, cost,
}: ProductType) => {
    return (
        <div className='p-1.5 w-1/2'>
            <div className='h-full w-full bg-black/80 backdrop-blur-sm rounded-3xl py-4 flex flex-col items-center text-left hover:bg-black/70 transition duration-100 hover:border-orange-300 border-black border-[1.5px] divide-y-2 divide-gray-700 cursor-pointer'>
                <div className='flex items-center gap-3 w-full px-3 py-2'>
                    <div className='text-2xl w-1/3'>
                        <Image src={image} alt="" height="45" width="45" />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <h2 className='font-extrabold text-md text-white'>
                            {name}
                        </h2>
                        <div>

                            <p className='font-medium text-xs text-white/60 text-gray-400'>
                                Profit per hour
                            </p>
                            <h4 className='flex items-center text-xl font-bold gap-3 text-gray-400'>
                                <FaCoins /> +{profitPerHour}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='divide-x-2 divide-gray-700 flex items-center gap-3 w-full px-5 pt-3 font-bold'>
                    <div className='text-gray-500'>
                        lvl {level}
                    </div>
                    <div className='px-3 font-bold text-white text-xl flex items-center gap-x-2'>
                        <Image src="/assets/images/coin.png" alt="" height="20" width="20" />
                        {cost >= 1000 ? (cost / 1000).toLocaleString() + 'K' : cost.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachProduct