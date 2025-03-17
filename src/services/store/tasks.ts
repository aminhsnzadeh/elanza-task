import { create } from 'zustand'
import { columns, tasks } from './_staticTask'
import { taskColumnType, taskKanbanType } from '../types'

interface taskType {
    tasks: taskKanbanType[],
    columns: taskColumnType[],
    setTasks: (tasks: taskKanbanType[]) => void
}

const useTaskStore = create<taskType>((set) => ({
    tasks: tasks,
    columns: columns,
    columnTitles: "",
    setTasks: (data: taskKanbanType[]) => set((state: taskType) => {return {...state, tasks: data}})
}))

export default useTaskStore