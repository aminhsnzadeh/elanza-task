// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { taskItemType } from "@/services/types";
import { Draggable } from "@hello-pangea/dnd";
import { ClockIcon, DeleteIcon, EditIcon, Trash2Icon } from "lucide-react";
// import moment from "moment"
import moment from "moment-jalaali"

interface taskComponentItemType {
    id: string, 
    index: number, 
    data: taskItemType, 
    getItemStyle: any
}

export default function Item({ id, index, data, getItemStyle }: taskComponentItemType) {
    // moment.loadPersian({dialect: 'persian-modern'});

    const {
        dateCreated,
        deadline,
        description,
        hasDeadline,
        title
    } = data

    const viewDateCreated = moment(dateCreated).format("jYYYY/jMM/jDD")
    const isNearExpiration = hasDeadline ? moment(new Date()).add(1, "day").isAfter(deadline) : false
    const isDateExpired = hasDeadline ? moment(new Date()).isAfter(deadline) : false

    return (
        <Draggable
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <div className={`stack gap-2 p-2 hover:[&>div>.task-action]:opacity-100 hover:[&>div>.task-action]:visible ${isDateExpired && "bg-red-50"} ${isNearExpiration && "bg-amber-50"}`}>
                        <div className="stack-row">
                            {/* 
                                will cause a little issue for dragging. It will prevent to select the right element to drag 
                                Comment the regular one and uncomment this then hover to title to see the result
                            */} 
                            {/* <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><b className="text-md truncate inline-block w-[300px] text-right">{title}</b></TooltipTrigger>
                                    <TooltipContent>
                                        {title}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>    */}
                            <b className="text-md truncate inline-block w-[300px] text-right">{title}</b>
                        </div>
                        <div className="text-sm ">
                            <p>{description}</p>
                        </div>
                        <div className="stack-row justify-between">
                            <div className="stack-row gap-2 items-center">
                                <ClockIcon width={16} className={`${isDateExpired && "text-red-600"}`} />
                                <span className={`${isDateExpired && "text-red-600"} text-sm`}>{viewDateCreated}</span>
                                {isDateExpired && <span className="text-red-600 text-sm" >عقب افتاده</span>}
                                {isNearExpiration && <span className="text-amber-600 text-sm" >نزدیک به ددلاین</span>}
                            </div>
                            <div className="stack-row items-center task-action opacity-0 invisible gap-2 transition-all">
                                <EditIcon size={16} className="cursor-pointer" />
                                <Trash2Icon size={16} className="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
