import { Clipboard, ExternalLink, HomeIcon, PanelsTopLeft } from "lucide-react";
import { navItemType } from "../types";

const staticNav: navItemType[] = [
    {
        id: 1,
        name: "خانه",
        icon: HomeIcon,
        link: "/",
        action: "",
        isRoute: true
    },
    {
        id: 2,
        name: "تسک ها",
        icon: Clipboard,
        link: "/tasks",
        action: "",
        isRoute: true
    },
    {
        id: 3,
        name: "لینک به صفحه اصلی",
        icon: PanelsTopLeft,
        link: "https://elanza.com/",
        action: "",
        isRoute: false
    },
    {
        id: 4,
        name: "خروج",
        icon: ExternalLink,
        link: "/logout",
        action: "",
        isRoute: true
    },
]

export { staticNav }