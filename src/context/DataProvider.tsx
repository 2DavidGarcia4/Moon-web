import { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from "react";

type MoonData = {
  language: "es"|"en"
}

type ContextMoonData = {
  moonData: MoonData,
  setMoonData: Dispatch<SetStateAction<MoonData>>
}

const localDb = localStorage.getItem("moon-bot")
export const dataContext = createContext<ContextMoonData|undefined>(undefined)

export const useData = ()=> useContext(dataContext)

export const DataProvider = ({children}: {children: any})=> {
  const [moonData, setMoonData] = useState<MoonData>({language: "es"})

  console.log(children)
  useEffect(()=>{
    if(localDb) setMoonData(JSON.parse(localDb))
    else localStorage.setItem("moon-bot", JSON.stringify(moonData))
  }, [])

  return (
    <dataContext.Provider value={{moonData, setMoonData}} >
      {children}
    </dataContext.Provider>
  )
}