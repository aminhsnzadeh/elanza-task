import { Draggable } from "@hello-pangea/dnd";

export default function Item({ id, index, data, getItemStyle }: {id: string, index: number, data: any, getItemStyle: any}) {

    return (
        <Draggable
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    <div className="stack">
                        <div className="stack-row">
                            <b className="text-md">{data.title}</b>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
