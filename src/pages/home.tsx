import { urlTaskPage } from "@/services/store/_address"
import { useNavigate } from "react-router-dom"

export default function HomePage() {

    const navigate = useNavigate()

    const handleGoTasks = () => {
        navigate(urlTaskPage)
    }

    return (
        <div className="stack gap-2 py-8">
            <h3 className="text-2xl font-bold text-center">خوش آمدید</h3>
            <h4 className="text-lg text-center">پنل مدیرت تسک</h4>
            <p className="text-md text-center mt-8">برای شروع روی <b className="cursor-pointer" onClick={handleGoTasks} >تسک ها</b>  کلیک کنید</p>
        </div>
    )
}