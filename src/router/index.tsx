import { HomePage, TasksPage } from "@/pages";
import { Routes, Route } from "react-router-dom";


export default function MyRouter() {

    return (
        
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/tasks"} element={<TasksPage />} />
            </Routes>

    )
}