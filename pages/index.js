import styles from "../styles/Home.module.scss";
function Home() {
  return (
    <div className="container mt-5">
      <div>
        <h1 className={styles.title}>Olá meu bem</h1>
      </div>
      <div>
        <img
          className={styles.image}
          src="https://media.tenor.com/IVfBB8GdECAAAAAM/happy-tuesday.gif"
          alt="DOGO"
        />
      </div>
      <div>
        <h2 className={styles.subtitle}>Tenha um ótimo dia!</h2>
      </div>
    </div>
  );
}

export default Home;
