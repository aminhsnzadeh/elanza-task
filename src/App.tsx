import { useTaskStore } from "./services/store"


function App() {

    const { tasks } = useTaskStore()

    return (
        <div>
            {
                tasks.map((item) => {
                    return item
                })
            }
        </div>
    )
}

export default App
