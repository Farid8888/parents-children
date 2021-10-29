import classes from './ChildrenForm.module.css'
import {useRef,useContext} from 'react'
import { infoContext } from '../context/use-context'
import {useHistory} from 'react-router-dom'

const ChildrenForm =(props)=>{
    const addChildren = useContext(infoContext).addChildren
    const nameRef = useRef()
    const ageRef = useRef()
     const history = useHistory()
    const onSubmitHandler=(event)=>{
     event.preventDefault()
     const items = {
         childName:nameRef.current.value,
         childAge:ageRef.current.value,
         id:Math.random()
     }
     addChildren(items)
     history.push('/main')
    }
    return(
      <form className={classes.children} onSubmit={onSubmitHandler}>
          <div className={classes.control}> 
              <label htmlFor='name'>Имя ребенка</label>
              <input id='name' required ref={nameRef}/>
          </div>
          <div className={classes.control}>
              <label htmlFor='age'>Возраст ребенка</label>
              <input id='age' required ref={ageRef}/>
          </div>
          <div className={classes.btn}>
              <button type='submit'>Добавить</button>
          </div>
      </form>
    )
}

export default ChildrenForm