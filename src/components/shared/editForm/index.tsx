import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { faIR } from 'date-fns/locale'; 
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, EditIcon } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import AMTextfield from "../input/AMTextfeild";
import { FieldValues, useForm } from "react-hook-form";
import AMTextarea from "../input/AMTextarea";
import { taskItemType } from "@/services/types";
import useEditTask from "@/services/hooks/useEditTask";

interface editDataType {
    editData: taskItemType
    columnIndex: number
}

export function EditTaskForm({ editData, columnIndex }: editDataType) {
    const [date, setDate] = useState<Date | undefined>(editData.deadline)
    const [hasDeadline, setHasDeadline] = useState<boolean>(editData.hasDeadline)
    const [formOpen, setFormOpen] = useState<boolean>(false)

    const { control, handleSubmit, } = useForm()

    const resetForm = () => {
        setFormOpen(false)
    }

    const { submitTask } = useEditTask(editData, columnIndex, resetForm)

    const handleTaskSubmit = (data: FieldValues) => {
        //sending date externally
        submitTask(
            data, 
            hasDeadline ? date : undefined
        )
    }

    return (
        <Popover open={formOpen} onOpenChange={setFormOpen}>
            <PopoverTrigger asChild >
                <EditIcon size={16} className="cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="w-[350px]">
                <form onSubmit={handleSubmit(handleTaskSubmit)} className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">ویرایش تسک</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="title">عنوان</Label>
                            <AMTextfield
                                name="title"
                                control={control}
                                defaultValue={editData.title}
                                id="title"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Label htmlFor="description" className="h-[28px]">توضیحات</Label>
                            <AMTextarea
                                name="description"
                                control={control}
                                defaultValue={editData.description}
                                id="description"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4 my-2">
                            <Label htmlFor="hasDeadline">دارای ددلاین</Label>
                            <Checkbox checked={hasDeadline} onCheckedChange={(val) => {setHasDeadline(!!val);}} id="hasDeadline" />
                        </div>
                        {
                            hasDeadline &&
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="hasDeadline">ددلاین</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "col-span-2 justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>انتخاب تاریخ</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            locale={faIR}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        }
                        <div className="grid grid-cols-3 items-center gap-4 my-2">
                            <div className="col-span-2"></div>
                            <Button type="submit" className="col-span-1" >
                                ویرایش
                            </Button>
                        </div>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}
