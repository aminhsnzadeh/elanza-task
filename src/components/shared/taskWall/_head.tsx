import { taskColumnType } from "@/services/types"

interface headType {
    data: taskColumnType
}

export default function ColumnHead({ data }: headType) {

    const { title } = data

    return (
        <div className="stack-row bg-zinc-800 p-4 -mt-2 -mx-2 mb-2">
            <span className="font-bold text-sm text-white">{title}</span>
        </div>
    )
}