import CurrentPoints from '@/components/tasks/CurrentPoints'
import TaskList from '@/components/tasks/TaskList'
import React from 'react'

const TasksPage = async () => {

    return (
        <section className='flex items-center justify-center flex-col'>
            <CurrentPoints />
            <TaskList />
        </section>
    )
}

export default TasksPage