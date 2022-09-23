import "./home.css"
import { useRef } from "react"
import { useReadySection } from "../../hooks/useReadySection"

export const Home = ()=> {
  const home = useRef(null)

  useReadySection(home, "home-ready")
  document.title = "Moon"

  return (
    <section ref={home} className="home">
      <p className="home-description">
        Un bot de discord multipropósitos con diferentes características que pueden llegar a ser útiles para tu servidor
      </p>

      <div className="home-functions">
        <h2>Funciones</h2>
        <p>
          Moon bot tiene diferentes funciones contando con las categorias de moderación, diversión, configuraciones, utilidades, entre otras. Además cuenta con más de 60 comandos para pasar un buen rato con los usuarios.
        </p>
      </div>
    </section>
  )
}