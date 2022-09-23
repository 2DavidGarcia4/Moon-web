import { useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import icon from "../../imgs/icon.png"
import "./header.css"

export const Header = ()=> {
  const menu = useRef<HTMLElement>(null)
  const navigate = useNavigate()

  function openMenu(){
    menu.current?.classList.add("open-menu")
  }

  function closeMenu(){
    menu.current?.classList.remove("open-menu")
  }

  return (
    <header className="header">
      <div onClick={()=> navigate("/")} className="header-title">
        <img className="header-title-img" src={icon} alt="" />
        <h1>Moon</h1>
      </div>

      <i onClick={openMenu} className='bx bx-menu header-menu'></i>

      <nav ref={menu} className="header-navbar">
        <ul className="header-list">
          <li className="header-item">
            <a className="header-link" href="https://discord.com/api/oauth2/authorize?client_id=959204525678424064&permissions=8&scope=bot%20applications.commands" target={"_blank"}>
              <i className='bx bx-plus'></i>
              <p>Invitar</p>
            </a>
          </li>
          <li className="header-item">
            <a className="header-link" href="https://discord.gg/E4qPAFHF5z" target={"_blank"}>
              <i className='bx bx-server'></i>
              <p>Servidor</p>
            </a>
          </li>
          <li onClick={closeMenu} className="header-item">
            <NavLink className={({isActive})=> isActive ? "header-link link-active" : "header-link"} to={"/terms-of-use"}>
              <i className='bx bx-help-circle'></i>
              <p>Términos de uso</p>
            </NavLink>
          </li>
          <li onClick={closeMenu} className="header-item">
            <NavLink className={({isActive})=> isActive ? "header-link link-active" : "header-link"} to={"/privacy-policies"}>
              <i className='bx bx-info-square' ></i>
              <p>Políticas de privacidad</p>
            </NavLink>
          </li>
        </ul>
        <i onClick={closeMenu} className='bx bx-x header-close-menu'></i>
      </nav>
    </header>
  )
}