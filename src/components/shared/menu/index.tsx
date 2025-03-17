import { useNavigationStore } from "@/services/store"
import Item from "./_item"

export default function AppMenu() {

    const { tasks } = useNavigationStore()

    return (
        <div>
            <ul className="space-y-2 p-4 pt-6">
                {
                    tasks.map((item) => {
                        return (
                            <Item data={item} key={item.id} />
                        )
                    })
                }
            </ul>
        </div>
    )
}