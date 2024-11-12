import BoxTimeGroup from "./components/box-time-group/box-time-group";
import styles from './Page.module.scss'

export default function Home() {
  return (
    <main>
    <div className={styles.container}>
    <BoxTimeGroup /> 
    </div>
    </main>
  );
}
