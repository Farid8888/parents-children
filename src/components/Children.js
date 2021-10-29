import ChildrenItem from './ChildrenItem'
import classes from './Children.module.css'


const Children =(props)=>{

    let content =props.children.map((child,index)=>{
        return <ChildrenItem key={Math.random()} name={child.childName} age={child.childAge} index={index} remove={props.remove}/>
    })
    return(
        <section className={classes.children}>
            {content}
        </section>
    )
}

export default Children