import "./termsOfUse.css"
import {languages} from "../../db/index.json"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"
import { TransformText } from "../../components/TransformText"
import { useData } from "../../context/DataProvider"

export const TermsOfUse = ()=> {
  const tou = useRef(null)
  const data = useData()
  if(!data) return (<p>Loading</p>)
  const {moonData: {language: lang}} = data

  useReadySection(tou, "tou-ready")
  document.title = languages[lang].termsOfUse.title

  return (
    <section ref={tou} className="termsOfUse">
      <h2 className="termsOfUse-title">{languages[lang].termsOfUse.title}</h2>
      <div className="termsOfUse-content">
        <p>{languages[lang].termsOfUse.description[0]}</p>
        <p>
          <ul className="termsOfUse-list">
            {languages[lang].termsOfUse.prohibitedActions.map((m, i)=> <li key={i}>{m}</li>)}
          </ul>
        </p>

        <p><TransformText text={languages[lang].termsOfUse.description[1]} /></p>
      </div>
    </section>
  )
}