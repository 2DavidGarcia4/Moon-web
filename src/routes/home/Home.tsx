import "./home.css"
import db from "../../db/index.json"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"
import { useData } from "../../context/DataProvider"
import { TransformText } from "../../components/TransformText"

export const Home = ()=> {
  const home = useRef(null)
  const data = useData()
  if(!data) return (<p>Loading</p>)
  const {moonData: {language: lang}} = data

  useReadySection(home, "home-ready")
  document.title = "Moon"

  return (
    <section ref={home} className="home">
      <p className="home-description">{db.languages[lang].moon.description}</p>

      <div className="home-functions">
        <h2>{db.languages[lang].home.title}</h2>
        <p>
          <TransformText text={db.languages[lang].home.description} />
        </p>
      </div>
    </section>
  )
}