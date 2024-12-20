import React from "react";
import Column from "../components/Column";

function KanbanBoard(){
    const columns = ['To Do', 'In progress', 'Done'];

    return(
        <div className="flex gap-4 p-4">
            {columns.map((column, index)=> (
                <Column key={index} title={column}/>
            ))}
        </div>
    );

}

export default KanbanBoard;