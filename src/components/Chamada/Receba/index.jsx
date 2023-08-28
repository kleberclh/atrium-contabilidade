import styles from "../Receba/styles.module.css";

export default function Receba() {
  return (
    <div id="receba" className={styles.Container}>
      <h1>Receba atendimento de um contador de verdade</h1>
      <p>
        Assessoria contábil tem importância fundamental para o sucesso <br />
        dos negócios, tanto do ponto de vista legal quanto gerencial.
      </p>
      <div className={styles.buttons}>
        <button className={styles.preto}>Abrir Empresa</button>
        <button className={styles.branco}>Migrar Contabilidade</button>
      </div>
    </div>
  );
}
