import ConfirmedLetters from './ConfirmedLetters';
import PresentLetters  from './PresentLetters';
import Keyboard from './Keyboard';
import styles from '../../styles/Home.module.css';
import { PresentRowsProvider } from "../contexts/PresentRowsContext";

function LayoutLeft({ children }) {
    return (
        <div className={ styles.layoutLeft }>
            <ConfirmedLetters />
            <Keyboard />
            <PresentRowsProvider>
                <PresentLetters />
            </PresentRowsProvider>
        </div>
    );
}

export default LayoutLeft;