import {createContext,useState,useEffect} from 'react'



export const infoContext =createContext({
    children:[],
    addChildren:(child)=>{},
    removeItems:(childr,inx)=>{}
})



const ContextProvider=(props)=>{
  const [effect,setEffect] = useState(false)  
  const [children,setChildren] = useState([])

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

  useEffect(()=>{
  },[effect])
    return(
        <infoContext.Provider value={{children:children,addChildren:addHandler,removeItems:removeHandler}}>
           {props.children}
        </infoContext.Provider>
    )
}

export default ContextProvider