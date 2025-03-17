import { useTaskStore } from "../store";

export default function useRemoveTask(columnId: number) {

    const { removeTask } = useTaskStore()

    const removeTaskFromTasks = (id: string) => {
        removeTask(id, columnId)
    }   

    return {
        state: {

        },
        removeTaskFromTasks
    }
}