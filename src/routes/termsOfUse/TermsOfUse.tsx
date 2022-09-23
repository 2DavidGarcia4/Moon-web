import "./termsOfUse.css"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"

export const TermsOfUse = ()=> {
  const tou = useRef(null)

  useReadySection(tou, "tou-ready")
  document.title = "Términos de uso"

  return (
    <section ref={tou} className="termsOfUse">
      <h2 className="termsOfUse-title">Términos de uso</h2>
      <div className="termsOfUse-content">
        <p>
          Se concede el permiso de usar todas las características con las que cuenta la aplicación (Moon Bot) pero al haber un mal funcionamiento de ella, usted puede llegar a ser sancionado, por lo cual, las cosas que no se pueden llegar a hacer con el bot son las siguientes:
        </p>
        <p>
          <ul className="termsOfUse-list">
            <li>
              Uso de malas palabras contra el bot o el servidor de soporte de este
            </li>
            <li>
              Aprovechamiento de errores que contienen el bot
            </li>
            <li>
              Generar ingresos por utilizar al bot
            </li>
            <li>
              Utilizar al bot para usos maliciosos
            </li>
            <li>
              Clonar al bot
            </li>
          </ul>
        </p>

        <p>
          Si realizas algún tipo de estás acciones el castigo puede ser la <span>prohibición</span> permanente del usuario a utilizar a Moon Bot.
        </p>
      </div>
    </section>
  )
}