"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { Button } from '../ui/button'
import { usePointsStore } from '@/store/PointsStore'
import { toast } from 'react-toastify'
import { checkCompletedTasks, completeTask } from '@/actions/tasks.actions'

interface Props {
    reward: number
    task: string
    image: string
    id: string | undefined
}

const EachTaskSpecial = ({ reward, task, image, id }: Props) => {
    const [isClaimable, setIsClaimable] = useState(false)
    const [isCompleted, setIsCompleted] = useState(true)

    const { points, addPoints } = usePointsStore()

    const handleClaim = async () => {

        const completed = await completeTask({ userId: window.localStorage.getItem('authToken')!, taskId: id! })

        if (completed == "invalidTask") {
            toast.error("Invalid task")
        }

        else if (completed == "unknownError") {
            toast.error("An error occurred")
        }

        else if (completed == "userNotExist") {
            toast.error("Not authenticated")
        }

        else if (completed == "success") {
            addPoints(reward)
            setIsClaimable(false)
            toast.success("Successully claimed reward")
        }
    }

    useEffect(() => {
        const verifyCompletion = async () => {
            const pointsClaimed = await checkCompletedTasks({ userId: window.localStorage.getItem('authToken')!, taskId: id! })
            if (!pointsClaimed) {
                setIsCompleted(false)
                console.log('yes')
            }
            else { console.log('no') }
        }
        verifyCompletion()
    }, [])

    return (
        <div className='w-full bg-primary/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex items-center gap-x-3 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
            <div className='text-5xl'>
                <Image src={image} height={80} width={80} alt="" />
            </div>
            <div className='flex gap-3 flex-col'>
                <h2 className='font-semibold text-md text-white'>
                    {task}
                </h2>
                <div className='flex items-center gap-2'>
                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                    <p>
                        {reward.toLocaleString()}
                    </p>
                </div>
            </div>

            {isClaimable ? <Button onClick={handleClaim} className='font-bold text-orange-400 border-orange-400 rounded-lg border-[2px]'>
                Claim
            </Button>

                : isCompleted ?
                    <Button disabled={true} onClick={handleClaim} className='font-bold text-orange-400 border-orange-400 rounded-lg border-[2px]'>
                        Claimed
                    </Button>
                    :
                    <Button onClick={() => setIsClaimable(true)} variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                        <FaCaretRight />
                    </Button>
            }

        </div>
    )
}

export default EachTaskSpecial