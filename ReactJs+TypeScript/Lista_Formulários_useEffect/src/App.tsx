import { useState, useEffect, useRef, useMemo } from "react"

export default function App() {
  const[tasks, setTasks] = useState<string[]>([])

  const[input, setInput] = useState("")

  const[editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  //Hook para referênciar algo
  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)

  //Hook para monitorar mudanças e aplicá-las
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('@localwill')

    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, [])

  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
      return;
    }

    localStorage.setItem('@localwill', JSON.stringify(tasks))

  }, [tasks])


  function handleRegister(){
    if(!input){
      alert('Preencha o nome da sua tarefa!')
      return;
    }

    if(editTask.enabled){
      handleSaveEdit()
      return;
    }

    setTasks(tarefas => [...tarefas, input])
    setInput('')
  }

  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enabled: false,
      task: ''
    })

    setInput('')   
  }

  function handleDelete(item: string){
    const removeTask = tasks.filter(task => task !== item)
    setTasks(removeTask)
  }

  function handleEdit(item: string){

    inputRef.current?.focus();

    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  //Hook para computar valor memorizado
  const totalTarefas = useMemo(() =>{
    return tasks.length;

  }, [tasks])

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input 
        placeholder="Digite o nome da tarefa: "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enabled ? "Atualizar Tarefa" : "Adicionar Tarefa"}
      </button>

      <hr />

      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br /><br />

      {tasks.map((item) => ( 
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}


