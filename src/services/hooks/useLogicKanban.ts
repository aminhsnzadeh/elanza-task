import { useTaskStore } from "../store";
import { taskKanbanType } from "../types";

export default function useLogicKanban() {

    const { tasks, setTasks, columns } = useTaskStore()

    const spacing = 8

    const setList = (tasks: any) => {
        setTasks(tasks)
    }

    //reorder function when moving item is on current column
    const reorder = (tasks: taskKanbanType, startIndex: number, endIndex: number) => {
        const result = Array.from(tasks)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }
    
    //move function that calls when an item goes to another column
    const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {

        //cloning the source and destinations that item is going
        const sourceClone = Array.from(source)
        const destClone = Array.from(destination)
        //the item that is moving
        const [removed] = sourceClone.splice(droppableSource.index, 1)

        destClone.splice(droppableDestination.index, 0, removed)

        const result: any = {};
        //making these arrays an object to use it onMove logic
        result[droppableSource.droppableId] = sourceClone
        result[droppableDestination.droppableId] = destClone

        return result
    }
    
    //when drag ends on lib
    function onDragEnd(result: any) {
        const { source, destination } = result;

        // dropped outside the tasks
        if (!destination) {
            return;
        }

        const sInd = +source.droppableId
        const dInd = +destination.droppableId

        //when this happense we cal reorder : user is NOT moving item to another
        //when sInd !== dInd that means we have a new column destination so move it to destination column
        if (sInd === dInd) {
            const items = reorder(tasks[sInd], source.index, destination.index)
            const newState = [...tasks]
            newState[sInd] = items
            setList(newState)
        } else {
            const result = move(tasks[sInd], tasks[dInd], source, destination)
            const newState = [...tasks]
            newState[sInd] = result[sInd]
            newState[dInd] = result[dInd]
            setList(newState)
        }
    }

    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        userSelect: "none",
        padding: `${spacing}px`,
        margin: `0 0 ${spacing}px 0`,
        // change background colour if dragging
        background: isDragging ? "#ccc" : "#fff",
        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? "#efefef" : "#f0f0f0",
        padding: `${spacing}px`,
        width: `${360}px`,
        height: "calc(100vh - 125px)",
        margin: "0 4px",
        overflow: "auto",
    });

    return {
        state: {
            tasks,
            columns
        },
        onDragEnd,
        getListStyle,
        getItemStyle
    }
}