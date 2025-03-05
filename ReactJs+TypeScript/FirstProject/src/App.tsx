import { useState } from "react"

interface AlunoProps{
  nome: string
  idade: string
}

export default function App(){
  const[nome, setNome] = useState('')
  const[idade, setIdade] = useState('')
  const[aluno, setAluno] = useState<AlunoProps>()
  const[contador, setContador] = useState(0)

  function mostrarAluno(){
    setAluno({
      nome: nome,
      idade: idade,
    }
    )
  }

  function adicionar(){
    setContador(valorAtual => valorAtual + 1)
  }

  function subtrair(){
    if(contador === 0){
      return
    }

    setContador(valorAtual => valorAtual - 1)
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>

      <input placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} />

      <input placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>

      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem-vindo: {aluno?.nome}</h3>
      <h3>Sua idade é {aluno?.idade} anos</h3>

      <hr />
      <br />

      <button onClick={subtrair}>-</button> {contador} <button onClick={adicionar}>+</button>
      
    </div>
  )
}
