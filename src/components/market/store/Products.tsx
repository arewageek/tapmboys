"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import EachProduct, { ProductType } from './EachProduct'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { SkinType, getSkins, skinBuy } from '@/actions/skins.actions'
import { Coins } from 'lucide-react'
import { toast } from 'react-toastify'
import { usePointsStore } from '@/store/PointsStore'

const Products = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [skins, setSkins] = useState<SkinType[] | undefined>()
    const [error, setError] = useState("")

    const { reducePoints, setSkin } = usePointsStore()

    const [selection, setSelection] = useState<SkinType | undefined>()

    useEffect(() => {
        const fetchSkins = async () => {
            const allSkins = await getSkins()
            if (!allSkins) { console.log('nonFound') }
            if (allSkins == 'unknownError') {
                setError("Could not fetch skins. Please check your internet connection and try again")
            }
            else {
                setError("")
                if (allSkins.length > 0 && allSkins !== 'skinNotFound') {
                    setSkins(allSkins)
                }
            }
        }

        fetchSkins()
    }, [])

    const handleDrawerClose = () => {
        setOpenDrawer(false);
        setSelection(undefined)
        console.log('closed')
    }

    const handleDrawerOpen = ({ image, name, profitPerHour, cost, id, league }: SkinType) => {
        setSelection({ cost, name, profitPerHour, id, league, image })
        setOpenDrawer(true);
    }

    const handleSkinBuy = async () => {

        const currentLocalPoints = window.localStorage.getItem("points")
        const user = window.localStorage.getItem("authToken")

        const buy = await skinBuy({ id: selection?.id!, chatId: user!, localBalance: Number(currentLocalPoints!) })
        if (buy.status == "errorOccurred") {
            toast.error("An error occurred")
        }
        else if (buy.status == "insufficientBalance") {
            toast.error("Insufficient Balance")
        }
        else if (buy.status == "success") {
            window.localStorage.setItem('skin', `${buy.image}`)
            setSkin(buy.image)
            reducePoints(selection?.cost)
            toast.success("Skin purchased")
        }


        setSelection(undefined)
        setOpenDrawer(false)
    }

    return (
        <>
            <div className='flex flex-col gap-2 w-full max-h-[calc(100vh-200px)] overflow-y-hidden'>
                <div className='flex flex-wrap  overflow-y-auto pb-[30vh]'>
                    {skins && skins.map((item, index) =>
                        <EachProduct onclick={() => handleDrawerOpen({
                            name: item.name,
                            id: item.id,
                            league: item.league,
                            profitPerHour: item.profitPerHour,
                            cost: item.cost,
                            image: item.image
                        })}
                            key={index}
                            name={item.name}
                            league={item.league!}
                            profitPerHour={item.profitPerHour!}
                            image={item.image}
                            cost={item.cost}
                        />
                    )}
                </div>
            </div>

            <Drawer open={openDrawer} onClose={handleDrawerClose}>
                <DrawerContent className='bg-black/80 text-primary-foreground'>
                    <DrawerHeader>
                        <DrawerTitle className='uppercase'>{selection?.name} </DrawerTitle>
                        <DrawerDescription className='capitalize'>{selection?.league}</DrawerDescription>
                    </DrawerHeader>

                    <div className='w-full px-5 py-3 flex flex-col gap-y-4 divide-y-2 divide-gray-700'>
                        <div className='flex w-full px-4 items-center justify-center flex-col gap-y-2'>
                            {selection?.image && <Image src={selection?.image} alt={selection.name} height={200} width={300} className='rounded-2xl border-3 border-orange-400' />}
                            <div className='text-gray-300 font-medium'>
                                League: Pilot
                            </div>
                        </div>

                        <div className='w-fit mx-auto divide-x-2 divide-gray-700 p-4 flex items-center'>
                            <div className='text-gray-400 px-4 '>
                                <div className='text-2xl font-semibold flex gap-x-3 items-center'>
                                    <Coins /> 800k
                                </div>
                                <div className='text-xs w-full'>
                                    Profit Per Hour
                                </div>
                            </div>

                            <div className='w-full px-4 text-white font-bold text-4xl flex items-center gap-x-2'>
                                <Image src={"/assets/images/coin.png"} alt="" height={30} width={30} />
                                {selection?.cost && selection?.cost >= 1000 ? selection?.cost / 1000 + 'K' : selection?.cost}
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        {selection?.cost && selection?.cost <= Number(window.localStorage.getItem('points')) ?
                            <div onClick={handleSkinBuy} className='w-full px-3 py-3 rounded-xl font-bold bg-white text-black text-center border-2 border-white hover:bg-white/20 hover: hover:text-white transition duration-200 cursor-pointer'>Buy Skin</div>
                            : <div className='w-full px-3 py-3 rounded-xl font-bold border-2 border-white/20 text-center shadow'>Not Eligible</div>}
                        <DrawerClose onClick={handleDrawerClose}>
                            <div className='w-full px-3 py-3 rounded-xl font-bold bg-red-400/15 text-white border-2 border-red-400 hover:bg-red-400/50 hover: hover:text-white transition duration-200'>Cancel</div>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer >
        </>
    )
}

export default Products