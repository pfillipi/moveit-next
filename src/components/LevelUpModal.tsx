import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>

                <strong>Congratulations</strong>
                <p>You achieved a new level.</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="Close modal" />
                </button>
            </div>
        </div >
    )
}