const API = "http://localhost:3000/api";
import { CreateTask, UpdateTask } from "../interfaces/task.interface";

export async function createTaskRequest(task: CreateTask) {
  return await fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getTasksRequest() {
  return await fetch(`${API}/tasks`, {
    method: "GET",
  });
}

export async function deleteTaskRequest(id: string) {
  return await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
  });
}

export async function updateTaskRequest(id: string, task: UpdateTask) {
  return await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
