import classes from './ParentForm.module.css'
import React,{useState,useRef} from 'react'


const ParentForm = ()=>{
    const nameRef = useRef()
    const ageRef = useRef()
     const [children,setChildren] = useState([{name:'',age:''}])
     const addInput = ()=>{
         setChildren([...children,{name:'',age:''}])
     }

    //  let content = children.map(child=>{
    //      return(

    //      )
    //  })
    return(
       <form className={classes.form}>
           <h3>Персональные данные</h3>
           <input className={classes.name} type='text' placeholder='Имя' required ref={nameRef}/>
           <input className={classes.age} type='number' placeholder='Возраст' required ref={ageRef}/>
           <div className={classes.btn}>
               <h3>Дети (макс.5)</h3>
             <button type='button' onClick={addInput}>
                   <div className={classes.flex}>
                   <span className={classes.plus}>+</span> <span>Добавить ребенка</span>
                   </div>
             </button>
           </div>

           <button className={classes.btn2}>Сохранить</button>
       </form>
    )
}

export default ParentForm