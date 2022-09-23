import "./privacyPolicies.css"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"

export const PrivacyPolicies = ()=> {
  const pp = useRef<HTMLElement>(null)

  useReadySection(pp, "pp-ready")
  document.title = "Políticas de privacidad"

  return (
    <section ref={pp} className="privacyPolicies">
      <h2 className="privacyPolicies-title">Políticas de privacidad</h2>
      <div className="privacyPolicies-content">
        <p className="privacyPolicies-important">
          Al usar la aplicación de Moon Bot usted está aceptando nuestras políticas de privacidad que se le muestran a continuación.
        </p>

        <p>
          Primero que nada, ¿Moon Bot es seguro?. Moon Bot se caracteriza por brindar una seguridad a los usuarios que lo suelen utilizar recopilando los datos necesarios y que no llegan a afectar a los usuarios tales como su identificación, fecha de creación de la cuenta y su avatar y los recopilamos para el correcto funcionamiento de la aplicación.
        </p>

        <p>
          Si desea eliminar alguno de estos datos no dudes en ingresar al servidor de soporte para solicitar la eliminación de alguno de estos datos puedes dar clic <a href="https://discord.gg/E4qPAFHF5z" target={"_blank"}>aquí</a>.
        </p>

        <p>
          Los datos recopilados no se comparten ni mucho menos se venden a ninguna persona, empresa, etc.
        </p>

        <p>
          Cabe aclarar que para uno de los sistemas de la aplicación los cuales son el sistema de logs, se recopila los mensajes eliminados y editados de los usuarios, sin embargo estos tienen una fecha de <span>15 días</span>, por lo cual cada <span>15 días</span> los mensajes recopilados se <span>eliminarán completamente</span> para mantener nuestra política segura.
        </p>
      </div>
    </section>
  )
}