import styles from "../../Chamada/Servicos/styles.module.css";
import img1 from "../../../assets/servicos/Ativo2.png";
import img2 from "../../../assets/servicos/Ativo1.png";
import img3 from "../../../assets/servicos/Ativo3.png";
export default function Servicos() {
  return (
    <div className={styles.Container}>
      <div className={styles.box}>
        <h3>
          Regularize <br />
          <span className={styles.azul}>o seu CNPJ</span>
        </h3>
        <img src={img1} alt="" width="140px" />
      </div>
      <div className={styles.box}>
        <h3>
          Abra a sua <br />
          <span className={styles.azul}>empresa</span>
        </h3>
        <img src={img2} alt="" width="140px" />
      </div>
      <div className={styles.box}>
        <h3>
          Migração de <br />
          <span className={styles.azul}>Contabilidade</span>
        </h3>
        <img src={img3} alt="" width="140px" />
      </div>
    </div>
  );
}
