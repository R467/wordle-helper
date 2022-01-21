import styles from '../../styles/Home.module.css';
import { ConfirmedLettersProvider } from '../contexts/ConfirmedLettersContext';

function Main({ children }) {

    return (
        <main className={styles.main}>               
            <ConfirmedLettersProvider>
                {children}        
            </ConfirmedLettersProvider>
        </main>
    );
}

export default Main;