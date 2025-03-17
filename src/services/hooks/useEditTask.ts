import { FieldValues } from "react-hook-form";
import { useTaskStore } from "../store";
import { taskItemType } from "../types";

export default function useEditTask(editData: taskItemType, columnIndex: number, reset: () => void) {

    const { editTask } = useTaskStore()

    const submitTask = (data: FieldValues, deadlineDate: Date | undefined) => {
        const bodyObj: taskItemType = {
            dateCreated: editData.dateCreated,
            deadline: deadlineDate || undefined,
            description: data.description,
            hasDeadline: !!deadlineDate,
            id: editData.id,
            title: data.title
        }

        editTask(bodyObj, columnIndex)
        reset()
    }   

    return {
        state: {

        },
        submitTask
    }
}