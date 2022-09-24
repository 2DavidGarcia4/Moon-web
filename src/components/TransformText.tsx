import db from "../db/index.json"

export const TransformText = ({text}: {text: string})=> {
  return (
    <>
      {text.split("|").map((m, i)=> {
        if(m.includes("$") && m.includes("=")){
          const typeEl = m[m.indexOf("=")+1]
          if(typeEl == "s"){
            const valEl = m.slice(m.indexOf("$")+1, m.indexOf("="))
            return <span key={i}>{valEl}</span>
          }
          if(typeEl == "a"){
            const valEl = m.slice(m.indexOf("$")+1, m.indexOf("{"))
            const link = m.slice(m.indexOf("{")+1, m.indexOf("}"))

            if(link == "server" || link == "invitation") return <a key={i} href={db.urls[link]} target={"_blank"}>{valEl}</a>
          }
        }else return m
      })}
      <a href="" target={"_blank"}></a>
    </>
  )
}