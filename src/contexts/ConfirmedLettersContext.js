import React, { createContext } from "react";
import useConfirmedLetters from '../hooks/useConfirmedLetters';

export const ConfirmedLettersContext = createContext();

function ConfirmedLettersProvider({ children }) {

    const {
        confirmedLetters,
        setConfirmedLetters
    } = useConfirmedLetters();
     
    return (
        <ConfirmedLettersContext.Provider
            value={{
                confirmedLetters,
                setConfirmedLetters
            }}
        >
            {children}
        </ConfirmedLettersContext.Provider>
    );
}

export { ConfirmedLettersProvider };