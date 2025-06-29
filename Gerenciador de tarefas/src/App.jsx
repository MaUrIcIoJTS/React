import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description: "Estura programacao para se tornar um desenvolvedor",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estura ingles para se tornar um poliglota",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Espanhol",
      description: "Estura espanhol para se tornar um poliglota",
      isCompleted: false,
    },
  ]);

  //responsavel por criar um novo prop para adicionar uma nova regra ao componente

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      //Se a tarefa da interacao atual conter o ID da tarefa que eu estou clicando e essa a tarfa que precisa ser alterada

      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //se passar do if nao precisa atualizar a tarefa

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
