"use client"

import Image from 'next/image'
import { useState } from 'react'
import { FaCoins } from 'react-icons/fa'
import EachProduct, { ProductType } from './EachProduct'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

const products: ProductType[] = [
    // { name: "Auto Clicker", cost: 10000, image: "/assets/images/coin.png", level: 0, profitPerHour: 900 },
    { name: "Space Suit", cost: 500, image: "/assets/images/suit.png", level: 0, profitPerHour: 20 },
    { name: "Space Shuttle", cost: 4000, image: "/assets/images/shuttle.png", level: 0, profitPerHour: 200 },
    { name: "Helmet", cost: 3400, image: "/assets/images/helmet.png", level: 0, profitPerHour: 700 },
]

const Products = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex flex-wrap'>
                    {products.map((item, index) =>
                        <EachProduct onClick={() => setOpenDrawer(true)} key={index} name={item.name} level={item.level} profitPerHour={item.profitPerHour} image={item.image} cost={item.cost} />
                    )}
                </div>
            </div>

            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <div>Submit</div>
                        <DrawerClose onClick={() => setOpenDrawer(false)}>
                            <div>Cancel</div>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default Products