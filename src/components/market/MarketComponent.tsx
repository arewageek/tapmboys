import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Rocket, Store } from 'lucide-react'
import DailyBoosters from './bonus/DailyBoosters'
import OneTimeBoosters from './bonus/OneTimeBoosters'
import Products from './store/Products'

const MarketComponent = () => {
    return (
        <div>
            <Tabs defaultValue='boost' className='w-full flex flex-col gap-y-4'>
                <TabsList className='bg-white/5 backdrop-blur-md border-white/20 border-[1.5px] py-2 text-white/70 w-full justify-between'>
                    <TabsTrigger className="w-full gap-2 text-sm font-bold" value="boost">
                        <Rocket /> Boost
                    </TabsTrigger>
                    <TabsTrigger className="w-full gap-2 text-sm font-bold" value="market">
                        <Store /> Market
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='boost'>
                    <DailyBoosters />
                    <OneTimeBoosters />
                </TabsContent>

                <TabsContent value="market">
                    <Products />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default MarketComponent