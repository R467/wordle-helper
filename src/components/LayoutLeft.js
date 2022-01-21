import ConfirmedLetters from './ConfirmedLetters';
import styles from '../../styles/Home.module.css';

function LayoutLeft({ children }) {
    return (
        <div className={ styles.layoutLeft }>
            <ConfirmedLetters />
        </div>
    );
}

export default LayoutLeft;