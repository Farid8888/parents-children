import ChildrenItem from "./ChildrenItem"
import classes from './PreviewItem.module.css'



const PreviewItem =(props)=>{
    let age
      if(+props.parentAge <=20){
        age = 'лет'
    }else if(+props.parentAge<=24){
        age = 'года'
    }else if(+props.parentAge<=30){
        age = 'лет'
    }else if(+props.parentAge<=34){
        age = 'года'
    }else if(+props.parentAge<=30){
        age = 'лет'
    }else if(+props.parentAge<=34){
        age = 'года'
    }else if(+props.parentAge<=40){
        age = 'лет'
    }else if(+props.parentAge<=44){
        age = 'года'
    }else if(+props.parentAge<=50){
        age = 'лет'
    }else if(+props.parentAge<=54){
        age = 'года'
    }else if(+props.parentAge<=60){
        age = 'лет'
    }else if(+props.parentAge<=64){
        age = 'года'
    }else if(+props.parentAge<=70){
        age = 'лет'
    }else if(+props.parentAge<=74){
        age = 'года'
    }else if(+props.parentAge<=80){
        age = 'лет'
    }else if(+props.parentAge<=84){
        age = 'года'
    }else if(+props.parentAge<=90){
        age = 'лет'
    }else if(+props.parentAge<=94){
        age = 'года'
    }else if(+props.parentAge<=100){
        age = 'лет'
    }
    let content =props.children.map((child,i)=>{
        return <ChildrenItem key={i} name={child.name} age={child.age}/>
    })
    return(
        <div className={classes.main}>
           <p>Персональные данные</p>
           <p className={classes.previewItem}>{props.parentName}, {props.parentAge} {age}</p>
           <p className={classes.control}>Дети</p>
           {content}
        </div>
    )
}

export default PreviewItem