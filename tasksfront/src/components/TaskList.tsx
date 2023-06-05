import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks";
import { Task } from "../interfaces/task.interface";
import TaskItem from "./TaskItem"
import { useTasks } from "../context/useTasks";

export default function TaskList() {
  //const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks } = useTasks()

  

  return (
    <div>
      {tasks.map((e) => (
        <TaskItem task={e} key={e._id}/>
      ))}
    </div>
  );
}
