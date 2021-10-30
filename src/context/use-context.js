import {createContext,useState} from 'react'



export const infoContext =createContext({
    info:[],
    addInfo:(info)=>{},
})



const ContextProvider=(props)=>{
  
  const [info,setInfo] = useState([])
  
  const addInfo=(info)=>{
      setInfo(prevst=>{
          return prevst.concat(info)
      })
  }

 
    return(
        <infoContext.Provider value={{info:info,addInfo:addInfo}}>
           {props.children}
        </infoContext.Provider>
    )
}

export default ContextProvider
