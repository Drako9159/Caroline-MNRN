const API = "http://localhost:3000/api"

interface Task {
    title: string,
    description?: string
    done?: boolean
}

export async function createTaskRequest(task: Task){
    return await fetch(`${API}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })

}