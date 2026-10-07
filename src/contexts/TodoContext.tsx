import {createContext, type ReactNode} from "react"

export const TodoContext = createContext({})

interface TodoProviderProps{
    children:ReactNode
}

export function TodoProvider({children}){

    return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
    )
}