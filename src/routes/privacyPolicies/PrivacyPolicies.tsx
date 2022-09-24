import "./privacyPolicies.css"
import {languages} from "../../db/index.json"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"
import { useData } from "../../context/DataProvider"
import { TransformText } from "../../components/TransformText"

export const PrivacyPolicies = ()=> {
  const pp = useRef<HTMLElement>(null)
  const data = useData()
  if(!data) return (<p>Loading</p>)
  const {moonData: {language: lang}} = data

  useReadySection(pp, "pp-ready")
  document.title = languages[lang].privacyPolicies.title

  return (
    <section ref={pp} className="privacyPolicies">
      <h2 className="privacyPolicies-title">{languages[lang].privacyPolicies.title}</h2>
      <div className="privacyPolicies-content">
        <p className="privacyPolicies-important">{languages[lang].privacyPolicies.caption}</p>

        {languages[lang].privacyPolicies.description.map((m, i)=> <p key={i}>{<TransformText text={m} />}</p>)}        
      </div>
    </section>
  )
}