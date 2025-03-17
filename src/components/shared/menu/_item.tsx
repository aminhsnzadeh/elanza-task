import { navItemType } from "@/services/types"
import { useLocation, useNavigate } from "react-router-dom"

interface itemType {
    data: navItemType
}

export default function Item({ data }: itemType) {

    const navigate = useNavigate()
    const location = useLocation()
    
    const {
        icon,
        name,
        isRoute,
        link
    } = data
    
    //icon of nav
    const Icon = icon
    //is current link active
    const isActive = location.pathname == link

    //if link is route we just navigate. Else we redirect user to link in new tab
    const handleClick = () => {
        if(isRoute) {
            navigate(link)
        } else {
            window.open(link)
        }
    }

    return (
        <li className={`stack-row gap-2 cursor-pointer p-1 px-2 rounded-sm transition ${isActive && "bg-white text-zinc-950"}`} onClick={handleClick}>
            <div className="stack-row gap-2">
                <Icon width={18} color={isActive ? "#09090b" : "#fff"} />
                <span className={`text-sm text-white ${isActive && "text-zinc-950"}`}>{name}</span>
            </div>
        </li>
    )
}