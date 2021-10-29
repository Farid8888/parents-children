import classes from './ParentForm.module.css'
import {Link,} from 'react-router-dom'
import Children from '../components/Children'
import {useContext,useRef} from 'react'
import { infoContext } from '../context/use-context'


const ParentForm = ()=>{
    const children=useContext(infoContext).children
    const remove =useContext(infoContext).removeItems
    const nameRef = useRef()
    const ageRef = useRef()

    // const onSubmitHandler =(event)=>{
    //   event.preventDefault(children)
    //   const preview ={
    //       parentName:nameRef.current.value,
    //       parentAge:ageRef.current.value,
    //       childName:
    //   }
    // }
    return(
       <form className={classes.form} onSubmit={}>
           <h3>Персональные данные</h3>
           <input className={classes.name} type='text' placeholder='Имя' required ref={nameRef}/>
           <input className={classes.age} type='number' placeholder='Возраст' required ref={ageRef}/>
           <div className={classes.btn}>
               <h3>Дети (макс.5)</h3>
               <Link to='/children'>
               {children.length <5 && <button>
                   <div className={classes.flex}>
                   <span className={classes.plus}>+</span> <span>Добавить ребенка</span>
                   </div>
             </button>}
             </Link>
           </div>
           <Children  children={children} remove={remove}/>
           <button className={classes.btn2}>Сохранить</button>
       </form>
    )
}

export default ParentForm