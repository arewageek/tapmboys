import GameLevelProgress from '@/components/game/GameLevelProgress';
import TapGlobe from '@/components/game/Globe';
import PointsTracker from '@/components/game/PointsTracker';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';
import { FaGlobe, FaGlobeAfrica, FaTrophy } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex items-center justify-between flex-col h-[90%] bg-primary/40 backdrop-blur-[3px] text-white/80 overflow-y-auto py-12">
      <div className="flex flex-col gap-y-6">
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
      <TapGlobe />
      <div className='flex flex-col gap-y-4'>


        <GameLevelProgress />
      </div>
    </main>
  );
}
