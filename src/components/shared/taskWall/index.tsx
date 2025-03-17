import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Item from "./_item";
import useLogicKanban from "@/services/hooks/useLogicKanban";
import ColumnHead from "./_head";

function TaskWall() {
    
    const {  state: { tasks, columns },
        onDragEnd, 
        getItemStyle, 
        getListStyle 
    } = useLogicKanban()

    return (
        <div>
            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {tasks.map((task, i: number) => (
                        <Droppable key={i} droppableId={`${i}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    <ColumnHead data={columns.filter((e) => e.id - 1 == i)[0]} />
                                    {task.map((item, index: number) => (
                                        <Item
                                            key={item.id}
                                            data={item}
                                            id={item.id}
                                            getItemStyle={getItemStyle}
                                            index={index}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
}

export default TaskWall
