import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Trash2Icon } from "lucide-react"
import { useState } from "react"
import useRemoveTask from "@/services/hooks/useRemoveTask";

interface removeAlertType {
    idToRemove: string
    columnIndex: number
}

export default function RemoveTaskAlert({ idToRemove, columnIndex }: removeAlertType) {
    const [formOpen, setFormOpen] = useState<boolean>(false)

    const { removeTaskFromTasks } = useRemoveTask(columnIndex)

    const handleRemove = () => {
        removeTaskFromTasks(idToRemove)
    }

    const handleClose = () => {
        setFormOpen(false)
    }

    return (
        <Popover open={formOpen} onOpenChange={setFormOpen}>
            <PopoverTrigger asChild >
                <Trash2Icon size={16} className="cursor-pointer"/>
            </PopoverTrigger>
            <PopoverContent className="w-[260px]">
                <div className="stack gap-4">
                    <p className="text-sm">آیا از حذف شدن این تسک مطمئن هستید ؟ این فرایند غیر قابل بازگشت است</p>
                    <div className="stack-row gap-2 justify-end">
                        <Button size="sm" className="w-[80px]" onClick={handleClose} variant="outline">خیر</Button>
                        <Button size="sm" className="w-[80px]" onClick={handleRemove} >بلی</Button>
                    </div>  
                </div>
            </PopoverContent>
        </Popover>
    )
}
