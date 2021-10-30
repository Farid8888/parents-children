import PreviewItem from "./PreviewItem"
import { useContext } from "react"
import { infoContext } from "../context/use-context"
import classes from './Preview.module.css'

const Preview =()=>{
    const info = useContext(infoContext).info
    let content =info.map((item,i)=>{
      return <PreviewItem key={i}  parentName={item.parentName} parentAge={item.parentAge} children={item.childrenInfo}/>
    })
    return(
       <div className={classes.preview}>
         {content}
       </div>
    )
}


export default Preview