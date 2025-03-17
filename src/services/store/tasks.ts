import { create } from 'zustand'
import { columns, tasks } from './_staticTask'
import { taskColumnType, taskKanbanType } from '../types'
import { persist, createJSONStorage } from 'zustand/middleware'

interface taskType {
    tasks: taskKanbanType[],
    columns: taskColumnType[],
    setTasks: (tasks: taskKanbanType[]) => void
}

export const useTaskStore = create<taskType>()(
    persist(
        (set) => ({
            tasks: tasks,
            columns: columns,
            columnTitles: "",
            setTasks: (data: taskKanbanType[]) => set((state: taskType) => {return {...state, tasks: data}})
        }),
        {
            name: "task-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)

export default useTaskStore