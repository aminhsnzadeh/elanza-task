import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { faIR } from 'date-fns/locale'; 
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldValues, useForm } from "react-hook-form";
import useAddTask from "@/services/hooks/useAddTask";
import { AMTextarea, AMTextfield } from "../input";

export function AddTaskForm() {
    const [date, setDate] = useState<Date>()
    const [hasDeadline, setHasDeadline] = useState<boolean>(false)
    const [formOpen, setFormOpen] = useState<boolean>(false)

    const { control, handleSubmit, reset } = useForm()

    const resetForm = () => {
        reset()
        setDate(undefined)
        setHasDeadline(false)
        setFormOpen(false)
    }

    const { submitTask } = useAddTask(resetForm)

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
                <Button>افزودن تسک</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px]">
                <form onSubmit={handleSubmit(handleTaskSubmit)} className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">اطلاعات تسک</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="title">عنوان</Label>
                            <AMTextfield
                                name="title"
                                control={control}
                                id="title"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Label htmlFor="description" className="h-[28px]">توضیحات</Label>
                            <AMTextarea
                                name="description"
                                control={control}
                                id="description"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4 my-2">
                            <Label htmlFor="hasDeadline">دارای ددلاین</Label>
                            <Checkbox  onCheckedChange={(val) => {setHasDeadline(!!val);}} id="hasDeadline" />
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
                                ثبت تسک
                            </Button>
                        </div>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}
