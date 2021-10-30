import Preview from "./Preview"




const PreviewItem =(props)=>{
    return(
        <div>
           <h3>Персональные данные</h3>
           <p>{props.parentName},{props.parentAge}</p>
           <div>
               <h3>Дети</h3>
               <p>{props.childName},{props.childAge}</p>
           </div>
        </div>
    )
}

export default PreviewItem