import ConfirmedLetters from './ConfirmedLetters';
import Keyboard from './Keyboard';
import styles from '../../styles/Home.module.css';

function LayoutLeft({ children }) {
    return (
        <div className={ styles.layoutLeft }>
            <ConfirmedLetters />
            <Keyboard />
        </div>
    );
}

export default LayoutLeft;