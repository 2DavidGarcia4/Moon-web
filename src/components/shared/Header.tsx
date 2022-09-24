import "./header.css"
import icon from "../../imgs/icon.png"
import db, {languages} from "../../db/index.json"
import { useRef, useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { SelectLang } from "../SelectLang"
import { useData, dataContext } from "../../context/DataProvider"

export const Header = ()=> {
  const header = useRef<HTMLElement>(null)
  const menu = useRef<HTMLElement>(null)
  const navigate = useNavigate()
  const data = useContext(dataContext)
  if(!data) return (<p>Loading</p>)
  const {moonData: {language: lang}} = data

  document.addEventListener("scroll", ()=> header.current?.classList.toggle("header-scroll", window.scrollY > 80))

  function openMenu(){
    menu.current?.classList.add("open-menu")
  }

  function closeMenu(){
    menu.current?.classList.remove("open-menu")
  }

  return (
    <header ref={header} className="header">
      <div onClick={()=> navigate("/")} className="header-title">
        <img className="header-title-img" src={icon} alt="" />
        <h1>Moon</h1>
      </div>

      <i onClick={openMenu} className='bx bx-menu header-menu'></i>

      <nav ref={menu} className="header-navbar">
        <SelectLang language={lang} />
        <i onClick={closeMenu} className='bx bx-x header-close-menu'></i>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-link" href={db.urls.invitation} target={"_blank"}>
              <i className='bx bx-plus'></i>
              <p>{languages[lang].header[0]}</p>
            </a>
          </li>
          <li className="header-item">
            <a className="header-link" href={db.urls.server} target={"_blank"}>
              <i className='bx bx-server'></i>
              <p>{languages[lang].header[1]}</p>
            </a>
          </li>
          <li onClick={closeMenu} className="header-item">
            <NavLink className={({isActive})=> isActive ? "header-link link-active" : "header-link"} to={"/terms-of-use"}>
              <i className='bx bx-help-circle'></i>
              <p>{languages[lang].header[2]}</p>
            </NavLink>
          </li>
          <li onClick={closeMenu} className="header-item">
            <NavLink className={({isActive})=> isActive ? "header-link link-active" : "header-link"} to={"/privacy-policies"}>
              <i className='bx bx-info-square' ></i>
              <p>{languages[lang].header[3]}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}