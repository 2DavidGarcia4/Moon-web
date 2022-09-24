import spanishImg from "../imgs/spanish.png"
import englishImg from "../imgs/english.png"
import { MouseEvent } from "react"
import {languages} from "../db/index.json"
import { useData } from "../context/DataProvider"

export const SelectLang = ({language}: {language: "es"|"en"})=> {
  const data = useData()

  function openSelectLang(event: MouseEvent<HTMLElement>){
    event.currentTarget.classList.toggle("selectLang-open")
  }

  function selectLan({currentTarget: {dataset}}: MouseEvent<HTMLLIElement>){
    if(data && dataset.lang && (dataset.lang == "es" || dataset.lang == "en")){
      data.moonData.language = dataset.lang
      data.setMoonData(data.moonData)
      console.log(data.moonData)
      localStorage.setItem("moon-bot", JSON.stringify(data.moonData))
    }
  }

  return (
    <div onClick={openSelectLang} className="selectLang">
      <div className="selectLang-selected">
        <img src={language == "es" ? spanishImg : englishImg} alt={languages[language].lang[language]} />
        <p>{languages[language].lang[language]}</p>
        <i className='bx bx-chevron-left selectLang-switch'></i>
      </div>
      <ul className="selectLang-options">
        <li onClick={selectLan} className={language == "es" ? "selectLang-option option-selected" : "selectLang-option"} data-lang="es">
          <img src={spanishImg} alt="Spanish" />
          <p>{languages[language].lang.es}</p>
        </li>
        <li onClick={selectLan} className={language == "en" ? "selectLang-option option-selected" : "selectLang-option"} data-lang="en">
          <img src={englishImg} alt="English" />
          <p>{languages[language].lang.en}</p>
        </li>
      </ul>
    </div>
  )
}