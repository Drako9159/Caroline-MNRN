import { createContext, useState, useEffect } from "react";
import { getTasksRequest } from "../api/tasks";
import { CreateTask, Task, UpdateTask } from "../interfaces/task.interface";
import {
  createTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksRequest()
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  async function createTask(task: CreateTask) {
    const res = await createTaskRequest(task);
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  async function deleteTask(id: string) {
    const res = await deleteTaskRequest(id);
    if (res.status === 204) {
      setTasks(tasks.filter((e) => e._id !== id));
    }
  }

  async function updateTask(id: string, task: UpdateTask) {
    const res = await updateTaskRequest(id, task);
    const data = await res.json();
    setTasks(tasks.map((task) => task._id === id ? {...task, ...data }: task))
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
