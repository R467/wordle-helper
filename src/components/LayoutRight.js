import styles from '../../styles/Home.module.css'
import PotentialAnswers from './PotentialAnswers';

function LayoutRight({ children }) {
    return (
        <div className={styles.layoutRight }>
            <h2>Potential answers</h2>
            <PotentialAnswers />
        </div>
    );
}

export default LayoutRight;