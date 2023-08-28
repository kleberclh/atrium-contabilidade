import { useState } from "react";
import styles from "../Valores/styles.module.css";
import backazul from "../../assets/backazul.png";

export default function Valores() {
  const [exibirTexto1, setExibirTexto1] = useState(false);
  const [exibirTexto2, setExibirTexto2] = useState(false);
  const [exibirTexto3, setExibirTexto3] = useState(false);

  const handleClick1 = () => {
    setExibirTexto1(!exibirTexto1);
  };

  const handleClick2 = () => {
    setExibirTexto2(!exibirTexto2);
  };

  const handleClick3 = () => {
    setExibirTexto3(!exibirTexto3);
  };

  return (
    <div id="valores" className={styles.Container}>
      <div className={styles.backazul}>
        <div className={styles.text}>
          <h1>+7</h1>
          <p>ANOS DE EXPERIÊNCIA</p>
        </div>
      </div>
      <div className={styles.valores}>
        <h1>Esses são nossos principais Pilares</h1>
        <div className={styles.pilares}>
            
          <h2 className={styles.hover} onClick={handleClick1}>
            Valores
          </h2>
          {exibirTexto1 && (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Vel
              <br />
              minus maxime neque deleniti facilis temporibus aut expedita <br />
              explicabo dolorum tenetur?
            </p>
          )}

          <h2 className={styles.hover} onClick={handleClick2}>
            Missão
          </h2>
          {exibirTexto2 && (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Repudiandae assumenda porro odio amet, voluptatibus optio iste eum{" "}
              <br />
              dicta quo ex.
            </p>
          )}

          <h2 className={styles.hover} onClick={handleClick3}>
            Visão
          </h2>
          {exibirTexto3 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Asperiores a tempora itaque nam harum natus, facere beatae neque{" "}
              <br />
              quisquam laboriosam? <br />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
