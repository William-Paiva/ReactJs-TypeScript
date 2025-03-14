import { useState } from 'react';
import './App.css';

import logoImg from './assets/logo.png';

function App() {
  const [phrases, setPhrases] = useState<string[]>([
    "A vida é feita de escolhas.",
    "O segredo do sucesso é a constância do propósito.",
    "A paciência é uma virtude.",
    "Nem tudo que reluz é ouro.",
    "O conhecimento é poder.",
    "Quem cedo madruga, Deus ajuda.",
    "A prática leva à perfeição.",
    "O tempo cura todas as feridas.",
    "Sorria, a vida é bela!",
    "Não deixe para amanhã o que pode fazer hoje.",
    "Grandes mudanças começam com pequenos passos.",
    "O medo é um obstáculo apenas se você permitir.",
    "Seja a mudança que você deseja ver no mundo.",
    "Persistência leva ao sucesso.",
    "A felicidade está nas pequenas coisas.",
    "A sorte favorece os preparados.",
  ])

  const [generated, setGenerated] = useState('');
  const [input, setInput] = useState('')

  function generatedPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setGenerated(phrases[randomIndex]);
  }

  function sendPhrase(){
    if (input.trim() !== '') {
      setPhrases([...phrases, input])
      setInput('')  
    }
      
  }

  return (
    <div className='flex flex-col justify-center items-center bg-gray-800 space-y-2'>

      <img src={logoImg} alt="logo" />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className='bg-blue-200 w-1/2 h-30 rounded-md border-2 border-blue-600' />

      <button
        onClick={sendPhrase}
        className='bg-blue-500 rounded-md p-2 text-white border-2 border-blue-400'>Send</button>

      <h2 className='text-4xl text-green-600 mt-2'>Generate your Random Phrases!</h2>

      <button
        className='bg-green-500 rounded-md p-2 text-white'
        onClick={generatedPhrase}>
        Generate Phrase
      </button>

      {generated !== '' && <p className='text-2xl bg-gray-100 p-6 rounded-sm'>{generated}</p>}

      <hr />
      <footer className='bg-blue-700 h-10 w-full flex justify-center items-center'>@all rigths reserved</footer>

    </div>
  );
}

export default App;
