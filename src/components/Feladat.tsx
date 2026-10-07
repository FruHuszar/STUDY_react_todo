import type { TodoTipus } from "../adat";
import { useTodoContext } from "../contexts/TodoContext";

interface FeladatProps {
    elem: TodoTipus,
    index: number
}

function Feladat({ elem, index }: FeladatProps) {
    /* a setAllpot függvényt a contextből fogja megkapni */
    const {setAllapot} = useTodoContext();

    return (
        <div className="todo">
            <span className="szoveg">{elem.tennivalo}</span>
            <span className="allapot">{elem.allapot}</span>
            <button onClick={() => setAllapot(index, "kész")} title="kész">✔️</button>
            <button onClick={() => setAllapot(index, "folyamatban")} title="folyamatban">🤞</button>
            <button onClick={() => setAllapot(index, "törölve")} title="töröl">✖️</button>
            <button onClick={() => setAllapot(index, "alap")} title="alap">Alapállapot</button>
        </div>
    )
}

export default Feladat
