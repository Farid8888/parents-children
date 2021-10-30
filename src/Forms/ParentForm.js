import classes from './ParentForm.module.css'
import React,{useState,useRef,useContext} from 'react'
import { infoContext } from '../context/use-context'
import { useHistory } from 'react-router'

const ParentForm = ()=>{
    const history =useHistory()
    const addInfo = useContext(infoContext).addInfo
    const nameRef = useRef()
    const ageRef = useRef()
     const [children,setChildren] = useState([])
     const addInput = ()=>{
         setChildren([...children,{name:'',age:''}])
     }
  
     const changeHandler =(event,index)=>{
      const list = [...children]
      const {name,value} = event.target
      list[index][name]=value
      setChildren(list)
     }

     const removeHandler = index=>{
         const list = [...children]
         list.splice(index,1)
         setChildren(list)
     }
     let content = children.map((item,i)=>{
         return(
            <div key={i} className={classes.childrenItem}>
            <div className={classes.child}>
                    <input type='text' name='name' value={item.name} placeholder={'Имя Ребенка'} required onChange={event=>changeHandler(event,i)}/>
                    <input type='number' name='age' value={item.age} placeholder={'Возраст Ребенка'} required onChange={event=>changeHandler(event,i)} min='1' max='17' step='1'/>
                <div className={classes.btn3}>
                  <button type='button' onClick={()=>removeHandler(i)}>Удалить</button>
                </div>
            </div>
        </div>
         )
     })
     console.log(children)

     const onSubmitHandler =(event)=>{
         event.preventDefault()
         const info={
             parentName:nameRef.current.value,
             parentAge:ageRef.current.value,
             childrenInfo:children
         }
         addInfo(info)
         setChildren([])
         history.push('/preview')
     }

    return(
       <form className={classes.form} onSubmit={onSubmitHandler}>
           <h3>Персональные данные</h3>
           <input className={classes.name} type='text' placeholder='Имя' required ref={nameRef}/>
           <input className={classes.age} type='number' placeholder='Возраст' required ref={ageRef} min='18' max='100' step='1'/>
           <div className={classes.btn}>
               <h3>Дети (макс.5)</h3>
             {children.length <5 &&<button type='button' onClick={addInput}>
                   <div className={classes.flex}>
                   <span className={classes.plus}>+</span> <span>Добавить ребенка</span>
                   </div>
             </button>}
           </div>
            {content}
           <button className={classes.btn2} type='submit'>Сохранить</button>
       </form>
    )
}

export default ParentForm