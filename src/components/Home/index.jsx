import styles from "../Home/styles.module.css";
import "../../App.css"
import background from "../../assets/Prancheta.png";
export default function Home() {
  return (
    <section id="home" className={styles.Container}>
      <div className={styles.texto}>
        <h4>Boas-vindas a Contabilidade Atrium</h4>
        <h2>Assessoria Contábil</h2>
        <p>
          Ajudamos a sua empresa a <br />
          <strong>prosperar e escalar.</strong>
        </p>
        <button>
          <a href="">Entre em contato</a>
        </button>
      </div>
    </section>
  );
}
