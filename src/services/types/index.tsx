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