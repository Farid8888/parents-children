import {createContext,useState,useEffect} from 'react'



export const infoContext =createContext({
    children:[],
    addChildren:(child)=>{},
    removeItems:(childr,inx)=>{},
    addItems:(items)=>{},
    items:[],
    addPreview:(pr)=>{},
    preview:[]
})



const ContextProvider=(props)=>{
  const [effect,setEffect] = useState(false)  
  const [children,setChildren] = useState([])
  const [preview,setPreview] = useState([])
  const [items,setItems] =useState([])

  const addHandler=(child)=>{
      setChildren(prevst=>{
          return prevst.concat(child)
      })
  }

  const removeHandler =(index)=>{
      const newChildren =children
      newChildren.splice(index,1)
      setChildren(newChildren)
      setEffect(prevst=>!prevst)
  }
  const addItems =(items)=>{
      setItems(prevst=>{
          return prevst.concat(items)
      })
  }

  const addPreview =(preview)=>{
    setPreview(prevst=>{
        return prevst.concat(preview)
    })
  }

  useEffect(()=>{
  },[effect])
    return(
        <infoContext.Provider value={{children:children,addChildren:addHandler,removeItems:removeHandler,addItems:addItems,items:items,addPreview:addPreview,preview:preview}}>
           {props.children}
        </infoContext.Provider>
    )
}

export default ContextProvider
