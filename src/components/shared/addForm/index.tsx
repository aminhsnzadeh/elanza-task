import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export function AddTaskForm() {

    const [date, setDate] = useState<Date>()
    const [hasDeadline, setHasDeadline] = useState<boolean>(false)

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>افزودن تسک</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">اطلاعات تسک</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="title">عنوان</Label>
                            <Input
                                id="title"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <Label htmlFor="description" className="h-[28px]">توضیحات</Label>
                            <Textarea
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
                                        initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        }
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
