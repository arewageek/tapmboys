import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { SatelliteDish } from 'lucide-react'
import { FaCaretRight, FaSatelliteDish, FaTrophy } from 'react-icons/fa'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import LeagueProgress from '@/app/tasks/LeagueProgress'
import { allLeagues, leagueData } from '@/actions/points.actions'

const TaskList = async () => {
    const leagues = await allLeagues()
    const currentLeagueStatus = await leagueData()

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <Tabs defaultValue='special' className='w-full flex flex-col gap-y-4'>
                <TabsList className='bg-white/5 backdrop-blur-md border-white/20 border-[1.5px] py-2 text-white/70 w-full justify-between'>
                    <TabsTrigger className="w-full" value="special">Special</TabsTrigger>
                    <TabsTrigger className="w-full" value="leagues">Leagues</TabsTrigger>
                    <TabsTrigger className="w-full" value="ref">Ref Tasks</TabsTrigger>
                </TabsList>

                <div>
                    <TabsContent value='special' className='w-full flex flex-col gap-y-4'>
                        <div className='w-full bg-primary/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex items-center gap-x-3 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                            <div className='text-5xl'>
                                <FaSatelliteDish />
                            </div>
                            <div className='flex gap-3 flex-col'>
                                <h2 className='font-semibold text-md text-white'>
                                    Subscribe to Telegram Channel
                                </h2>
                                <div className='flex items-center gap-2'>
                                    <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                    <p>
                                        15000
                                    </p>
                                </div>
                            </div>

                            <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                                <FaCaretRight />
                            </Button>
                        </div>
                    </TabsContent>


                    <TabsContent value='leagues' className='w-full flex flex-col gap-y-4'>

                        {leagues.map((league, index) => (
                            <div key={index} className='w-full bg-primary/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex flex-col gap-4 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                                <div className='w-full flex items-center justify-between gap-x-3'>
                                    <div className='flex gap-x-6 items-center'>
                                        <div className='text-5xl'>
                                            <FaTrophy />
                                        </div>
                                        <div className='flex gap-3 flex-col'>
                                            <h2 className='font-semibold text-md text-white'>
                                                {league.name}
                                            </h2>
                                            <div className='flex items-center gap-2'>
                                                <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                                <p>
                                                    {league.limit}
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <Button disabled={league.limit > currentLeagueStatus.level} variant='outline' className='bg-transparent border-orange-400 hover:bg-orange-400 hover:text-primary transition justify-self-end'>
                                        Claim
                                    </Button>
                                </div>

                                <div>
                                    <LeagueProgress league={league.name} value={league.limit > currentLeagueStatus.level ? (currentLeagueStatus.level / league.limit) * 100 : 100} />
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    <TabsContent value='ref' className='w-full flex flex-col gap-y-4'>
                        <div className='w-full bg-primary/60 backdrop-blur-sm px-4 py-5 rounded-2xl flex justify-between items-center gap-x-6 hover:bg-black/70 transition duration-200 cursor-pointer hover:border-orange-300 border-black border-[1.5px]'>
                            <div className='w-full flex items-center gap-x-3'>
                                <div className='text-5xl'>
                                    <FaSatelliteDish />
                                </div>
                                <div className='flex gap-3 flex-col'>
                                    <h2 className='font-semibold text-md text-white'>
                                        Invite 1 Friend
                                    </h2>
                                    <div className='flex items-center gap-2'>
                                        <Image src="/assets/images/planet.png" height={25} width={25} alt="" />
                                        <p>
                                            15000
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button variant='ghost' className='p-0 hover:bg-transparent hover:text-orange-300 px-3 py-2'>
                                <FaCaretRight />
                            </Button>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default TaskList