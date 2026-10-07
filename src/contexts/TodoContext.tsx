import {createContext, useContext, type ReactNode} from "react"
import { useState } from 'react'
import { TODOLISTA } from '../adat'
import type { AllapotTipus, TodoTipus } from '../adat'

interface FeladatokContextValue {
  lista: TodoTipus[],
  setAllapot: (index: number, allapot: AllapotTipus) => void
}

export const TodoContext = createContext<FeladatokContextValue | undefined>(undefined)

interface TodoProviderProps{
    children:ReactNode;
}

export function TodoProvider({children}:TodoProviderProps){

    const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA);
    function setAllapot(index: number, allapot: AllapotTipus) {
        const ujLista: TodoTipus[] = [...lista]
        ujLista[index] = { ...ujLista[index], allapot: allapot }
        setLista(ujLista)
    }

    return (
        <TodoContext.Provider value={{lista, setAllapot}}>
            {children}
        </TodoContext.Provider>
    )
}

/* Első saját hook:
Olyan függvény ami használható a komponensekben */
export function useTodoContext(){
        const context=useContext(TodoContext)
    if (context===undefined){
        throw new Error ("Az app csak provideren belül használható");
    }

    return context;
}