
import styles from './page.module.css';


const element = (
  <>
  <h1 className={styles.title}>Hola mundo</h1>
  <h2 className={styles.subtitle}>Son las {new Date().toTimeString() }</h2>
  </>
);


export default function Home() {
  return (
  <main className={styles.main}>
    <div className="App">
      {element}
      
    </div>
    </main>
  );
}

