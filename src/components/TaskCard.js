import React, { createContext, useState} from "react";

export const TaskContext = createContext ();

export const TaskProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);

    const addTask = (task) => setTask([...tasks, task]); 

    return(
    <TaskContext.Provider value={{tasks, addTask}}>
        {children}
    </TaskContext.Provider>
 );
};
