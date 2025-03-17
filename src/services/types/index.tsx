// ===================== general =======================

import { LucideProps } from "lucide-react"

export type navItemType = {
    id: number,
    name: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    link: string,
    action: string | undefined,
    isRoute: boolean
}

// ===================== tasks =======================

export type taskKanbanType = taskItemType[]
  
export interface taskItemType {
    id: string,
    title: string,
    description: string,
    dateCreated: Date,
    hasDeadline: boolean,
    deadline: Date | undefined,
}
  
export interface taskColumnType {
    id: number,
    title: string,
}