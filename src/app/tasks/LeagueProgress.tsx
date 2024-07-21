import { leagueData } from '@/actions/points.actions'
import { Progress } from '@/components/ui/progress'
import { usePointsStore } from '@/store/PointsStore'
import React from 'react'

const LeagueProgress = async ({ league, value }: { league: string, value: number }) => {

    return (
        <Progress max={100} value={value} />
    )
}

export default LeagueProgress