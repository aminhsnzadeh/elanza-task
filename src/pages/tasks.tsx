import { TaskWall } from "@/components/shared";
import { AddTaskForm } from "@/components/shared/addForm";


export default function TasksPage() {

    return (
        <div className="mx-2 space-y-4">
            <AddTaskForm />
            <TaskWall />
        </div>
    )
}