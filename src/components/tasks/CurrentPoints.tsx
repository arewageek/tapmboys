'use client'
import { usePointsStore } from '@/store/PointsStore'
import Image from 'next/image'
import PointsTracker from '../game/PointsTracker'
import { FaTrophy } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react'

const CurrentPoints = ({ type }: { type?: 'sm' }) => {
    const { points } = usePointsStore()

    return type == 'sm' ? <div className="flex flex-col gap-y-3 py-4">
        <PointsTracker />
        <div className='flex gap-1 justify-center items-center'>
            <div className='text-md font-bold flex items-center gap-x-3'>
                <span>
                    <FaTrophy />
                </span>
                Pilot
            </div>
            <ChevronRight />
        </div>

    </div > : <div className="flex flex-col gap-y-6 py-10">
        <PointsTracker />
        <div className='flex gap-1 justify-center items-center'>
            <div className='text-xl font-bold flex items-center gap-x-3'>
                <span>
                    <FaTrophy />
                </span>
                Pilot
            </div>
            <ChevronRight />
        </div>

    </div>
}

export default CurrentPoints