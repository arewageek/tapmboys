"use client"

import { League, allLeagues, leagueData } from '@/actions/points.actions'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import LeagueProgress from '@/app/tasks/LeagueProgress'
import { usePointsStore } from '@/store/PointsStore'
import { toast } from 'react-toastify'

const Leagues = () => {
    const { addPoints } = usePointsStore()

    const [leagues, setLeagues] = useState<League[] | undefined>()
    const [currentLeagueStatus, setCurrentLeagueStatus] = useState<{ level: number, current: string } | undefined>()


    useEffect(() => {
        const update = async () => {
            const allLeaguesList = await allLeagues()
            const myLeague = await leagueData()

            allLeaguesList && setLeagues(allLeaguesList)
            myLeague && setCurrentLeagueStatus(myLeague)
        }
        update()
    }, [])

    const handleClaim = async ({ leagueId }: { leagueId: number }) => {
        // const league = leagues[leagueId]

        // const points = league.entryReward

        // addPoints(points)

        toast.success("Points claimed successfully")
    }

    return (
        <>
            {leagues && leagues.length > 0 && leagues.map((league, index) => (
                <div key={index} className='w-full bg-primary/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex flex-col gap-4 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                    <div className='w-full flex items-center justify-between gap-x-3'>
                        <div className='flex gap-x-6 items-center'>
                            <div className='text-5xl'>
                                <Image src={league.trophy} height={80} width={80} alt="" />
                            </div>
                            <div className='flex gap-3 flex-col'>
                                <h2 className='font-semibold text-md text-white'>
                                    {league.name}
                                </h2>
                                <div className='flex items-center gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        {league.pointLimit}
                                    </p>
                                </div>
                            </div>

                        </div>

                        <Button onClick={() => handleClaim({ leagueId: index })} disabled={currentLeagueStatus && league.pointLimit > currentLeagueStatus.level} variant='outline' className='bg-transparent border-orange-400 hover:bg-orange-400 hover:text-primary transition justify-self-end'>
                            Claim
                        </Button>
                    </div>

                    <div>
                        <LeagueProgress league={league.name} value={currentLeagueStatus && league.pointLimit > currentLeagueStatus.level ? (currentLeagueStatus.level / league.pointLimit) * 100 : 100} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Leagues