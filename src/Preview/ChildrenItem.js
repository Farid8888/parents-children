import classes from './ChildrenItem.module.css'


const ChildrenItem =(props)=>{
    let age
    if(props.age === '1'){
        age = 'год'
    }else if(+props.age <=4){
        age = 'года'
    }else if(+props.age <=17){
        age = 'лет'
    }
    return(
          <div className={classes.children}>
               <p>{props.name}, {props.age} {age}</p>
          </div>
    )
}

export default ChildrenItem