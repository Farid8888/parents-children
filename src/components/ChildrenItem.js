import classes from './ChildrenItem.module.css'
import {useContext} from 'react'
import { infoContext } from '../context/use-context'


const ChildrenItem =(props)=>{
    const children =useContext(infoContext).children
    console.log(children)

    return(
        <div className={classes.childrenItem}>
            <div className={classes.child}>
                <div className={classes.item}>
                  <p>Имя</p>
                  <p>{props.name}</p>
                </div>
                <div className={classes.item}>
                    <input />
                  <p>Возраст</p>
                  <p>{props.age}</p>
                </div>
                <div className={classes.btn}>
                  <button type='button' onClick={()=>props.remove(props.index)}>Удалить</button>
                </div>
            </div>
        </div>
    )
}


export default ChildrenItem