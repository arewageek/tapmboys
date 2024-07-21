import GameLevelProgress from '@/components/game/GameLevelProgress';
import TapGlobe from '@/components/game/Globe';
import PointsTracker from '@/components/game/PointsTracker';
import CurrentPoints from '@/components/tasks/CurrentPoints';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';
import { FaGlobe, FaGlobeAfrica, FaTrophy } from 'react-icons/fa'

export default function Home() {
  return (
    <section className="flex items-center justify-between flex-col h-full  text-white/80 overflow-y-auto py-12">
      <CurrentPoints />
      <TapGlobe />
      <div className='flex flex-col gap-y-4'>
        <GameLevelProgress />
      </div>
    </section>
  );
}
