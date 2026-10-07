import { useState } from 'react'
import './App.css'
import { TODOLISTA } from './adat'
import type { AllapotTipus, TodoTipus } from './adat'
import Feladatok from './components/Feladatok'

function App() {
  const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA);

  function setAllapot(index: number, allapot: AllapotTipus) {
    const ujLista: TodoTipus[] = [...lista]
    ujLista[index] = { ...ujLista[index], allapot: allapot }
    setLista(ujLista)
  }

  return (
    <>
    <header>
      <h1>Todo</h1>
    </header>
    <article>
      <Feladatok lista={lista} setAllapot={setAllapot}/>
    </article>
    <footer>
      <p>Huszár Fruzsina Anna</p>
    </footer>
    </>
  )
}

export default App
