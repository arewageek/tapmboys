import Image from 'next/image'
import React from 'react'
import { FaCoins } from 'react-icons/fa'
import EachProduct, { ProductType } from './EachProduct'

const products: ProductType[] = [
    { name: "Auto Clicker", cost: 10000, image: "/assets/images/coin.png", level: 0, profitPerHour: 900 },
    { name: "Space Suit", cost: 500, image: "/assets/images/suit.png", level: 0, profitPerHour: 20 },
    { name: "Space Shuttle", cost: 4000, image: "/assets/images/shuttle.png", level: 0, profitPerHour: 200 },
    { name: "Helmet", cost: 3400, image: "/assets/images/helmet.png", level: 0, profitPerHour: 700 },
]

const Products = () => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-wrap'>
                {products.map((item, index) =>
                    <EachProduct key={index} name={item.name} level={item.level} profitPerHour={item.profitPerHour} image={item.image} cost={item.cost} />
                )}
            </div>
        </div>
    )
}

export default Products