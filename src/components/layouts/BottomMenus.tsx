"use client"
import { Coins, Fingerprint, HomeIcon, LineChart, ListChecks, Plus, PlusCircle, Rocket, Store, User, Users, Users2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const BottomMenus = () => {

    const pathname = usePathname()

    const links = [
        { icon: <Users />, label: 'Ref', path: '/referrals' },
        { icon: <ListChecks />, label: 'Tasks', path: '/tasks' },
        { icon: <Fingerprint />, label: 'Tap', path: '/' },
        // { icon: <Rocket />, label: 'Bonus', path: '/bonus' },
        { icon: <Store />, label: 'Market', path: '/market' },
        { icon: <LineChart />, label: 'Stats', path: '/stats' },
    ]

    return (
        <div className="relative bottom-0 left-0 h-[110px] flex items-center justify-around bg-black/60 px-4 w-full text-secondary">
            {links.map((link, index) => <Link href={link.path} key={index} className={`${pathname === link.path ? 'bg-gradient-to-b from-orange-400/20 to-orange-400/5 border-orange-500 border-2' : 'bg-white/5'} py-5 px-2 rounded-2xl group`}>
                <Button variant='ghost' className='flex flex-col group-hover:bg-transparent transition-all px-2 py-1 rounded-xl'>
                    <div className={`${pathname === link.path ? '-translate-y-2 text-orange-300' : 'group-hover:text-orange-300 transition group-hover:-translate-y-2 duration-300'}`}>
                        {link.icon}
                    </div>
                    <div className={`${pathname === link.path ? 'text-orange-300 block' : 'group-hover:text-orange-300 transition hidden group-hover:block duration-300'} text-[10px]`}>
                        {link.label}
                    </div>
                </Button>
            </Link>)}
        </div>
    )
}

export default BottomMenus