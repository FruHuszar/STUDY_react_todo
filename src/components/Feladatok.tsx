import Feladat from './Feladat'
import { useTodoContext } from '../contexts/TodoContext'

function Feladatok() {
  /* listát a contextből fogjuk megkapni: */
  const {lista} = useTodoContext();

  return (
    <div>
      {
        lista.map((elem, index) => {
          return (<Feladat elem={elem} index={index} key={elem.id} />)
        })
      }
    </div>
  )
}

export default Feladatok
