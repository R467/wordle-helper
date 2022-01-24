import React, { createContext } from "react";
import useConfirmedLetters from '../hooks/useConfirmedLetters';

export const ConfirmedLettersContext = createContext();

function ConfirmedLettersProvider({ children }) {

    const {
        confirmedLetters,
        setConfirmedLetters,
        eliminatedLetters,
        setEliminatedLetters,
        presentLetters,
        setPresentLetters
    } = useConfirmedLetters();
     
    return (
        <ConfirmedLettersContext.Provider
            value={{
                confirmedLetters,
                setConfirmedLetters,
                eliminatedLetters,
                setEliminatedLetters,
                presentLetters,
                setPresentLetters
            }}
        >
            {children}
        </ConfirmedLettersContext.Provider>
    );
}

export { ConfirmedLettersProvider };