import { BrowserRouter } from "react-router-dom"
import { DashboardLayout } from "./layout"
import MyRouter from "./router"

function App() {

    return (
        <BrowserRouter>
            <DashboardLayout>
                <MyRouter />
            </DashboardLayout>
        </BrowserRouter>
    )
}

export default App
