import { HomePage, TasksPage } from "@/pages";
import { urlHomePage, urlTaskPage } from "@/services/store/_address";
import { Routes, Route } from "react-router-dom";


export default function MyRouter() {

    return (
        
            <Routes>
                <Route path={urlHomePage} element={<HomePage />} />
                <Route path={urlTaskPage} element={<TasksPage />} />
            </Routes>

    )
}