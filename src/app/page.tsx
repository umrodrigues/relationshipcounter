import BackgroundMusic from "./components/background-music/background-music";
import BoxTimeGroup from "./components/box-time-group/box-time-group";
import styles from './Page.module.scss'

export default function Home() {
  return (
    <main>
    <div className={styles.container}>
    <BackgroundMusic /> 
    <BoxTimeGroup /> 
    </div>
    </main>
  );
}
