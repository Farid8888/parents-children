import PreviewItem from "./PreviewItem"
import { useContext } from "react"
import { infoContext } from "../context/use-context"


const Preview =()=>{
    const preview = useContext(infoContext).preview
    let content 
    return(
       <div>
         <PreviewItem/>
       </div>
    )
}


export default Preview