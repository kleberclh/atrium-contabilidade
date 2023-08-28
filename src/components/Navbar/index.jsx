import styles from "../Navbar/styles.module.css";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";
import Valores from "../Valores";
import Home from "../Home";
export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt=""width="60px"/>
        <div className={styles.flex}>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                <a href="">Contabilidade</a>
              </Link>
            </li>
            <li>
              <Link to="servico" smooth={true} duration={800}>
                <a href="">Serviços</a>
              </Link>
            </li>
            <li>
              <Link to="receba" smooth={true} duration={800}>
                <a href="">Contato</a>
              </Link>
            </li>
            <li>
              <Link to="valores" smooth={true} duration={800}>
                <a href="">Pilares</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
