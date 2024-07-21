import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { FaSpeakerDeck } from 'react-icons/fa'

const ReferralsPages = () => {
    return (
        <section className='h-full flex flex-col items-center justify-around px-0'>
            <div className='text-center flex flex-col gap-y-3'>
                <h4 className='text-xl font-medium'>My</h4>
                <h2 className='text-5xl font-bold text-white'>
                    0 Referrals
                </h2>
                <div className='mt-5'>
                    <h3 className='text-3xl font-semibold text-orange-300'>
                        + 0 users
                    </h3>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col gap-y-7'>

                <div className=''>
                    <h3 className='font-black text-3xl text-center text-white'>
                        You don't have any referrals yet
                    </h3>
                </div>

                <div className='w-full'>
                    <Card className='rounded-2xl bg-orange-200 w-full'>
                        <CardContent className='text-center px-10 py-4'>
                            <h3 className='text-xl font-bold'>
                                Invite Friends
                            </h3>
                            <p className='text-sm font-medium'>
                                and get 5,000 up to 40,000 coins each
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ReferralsPages