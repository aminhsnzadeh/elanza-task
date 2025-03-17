import { create } from 'zustand'
import { columns, tasks } from './_staticTask'
import { taskColumnType, taskItemType, taskKanbanType } from '../types'
import { persist, createJSONStorage } from 'zustand/middleware'

interface taskType {
    tasks: taskKanbanType[],
    columns: taskColumnType[],
    setTasks: (tasks: taskKanbanType[]) => void
    addTask: (newData: taskItemType) => void
    editTask: (changedData: taskItemType, columnIndex: number) => void
    removeTask: (removeId: string, columnIndex: number) => void
}

export const useTaskStore = create<taskType>()(
    //storing the data (only data) to local storage
    //but when API exits we no longer need the local storage way
    persist(
        (set) => ({
            tasks: tasks,
            columns: columns,
            columnTitles: "",
            //set all tasks for kanban logic
            setTasks: (data: taskKanbanType[]) => set((state: taskType) => {return {...state, tasks: data}}),
            //add a new task
            addTask: (newData: taskItemType) => {
                set((state: taskType) => {
                    //always adding a new item at start of column
                    //commentted will put it at the end. you can decide to use which one. just uncomment
                    // state.tasks[0].push(newData)
                    state.tasks[0].unshift(newData)

                    return {...state, tasks: state.tasks}
                })
            },
            //edit existing task
            editTask: (changedData: taskItemType, columnIndex: number) => {
                set((state: taskType) => {
                    //this lines of code will find the current item in nested array
                    //First we should find the current column by giving the column editting id then finding the array inside that column
                    //then simply we replace the object and finish
                    const oldItemInTasks = state.tasks[columnIndex].filter((e) => e.id == changedData.id)[0]
                    const newItemArrayIndex = state.tasks[columnIndex].indexOf(oldItemInTasks)
                    state.tasks[columnIndex][newItemArrayIndex] = changedData

                    return {...state, tasks: state.tasks}
                })
            },
            removeTask: (removeId: string, columnIndex: number) => {
                set((state: taskType) => {
                    //we will get the selected id and column id to remove task
                    //will detect that and remove that
                    const changedColumn = state.tasks[columnIndex].filter((e) => e.id != removeId)
                    state.tasks[columnIndex] = changedColumn

                    return {...state, tasks: state.tasks}
                })
            },
        
        }),
        {
            name: "task-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useTaskStore