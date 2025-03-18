import { FieldValues } from "react-hook-form";
import { useTaskStore } from "../store";
import { taskItemType } from "../types";

export default function useAddTask(reset: () => void) {

    const { tasks, addTask } = useTaskStore()

    const submitTask = (data: FieldValues, deadlineDate: Date | undefined) => {
        const bodyObj: taskItemType = {
            dateCreated: new Date(),
            deadline: deadlineDate || undefined,
            description: data.description,
            hasDeadline: !!deadlineDate,
            //this line and Id setting is because we may have conflict between adding a new item and id become exist on date string we filter it
            id: `item-${tasks.flat().length}-${new Date().toISOString()}`,
            title: data.title

        }

        addTask(bodyObj)
        reset()
    }   

    return {
        state: {

        },
        submitTask
    }
}