import React, { createContext } from "react";
import usePresentRows from '../hooks/usePresentRows';

export const PresentRowsContext = createContext();

function PresentRowsProvider({ children }) {

    const {
        presentRows,
        setPresentRows
    } = usePresentRows();
     
    return (
        <PresentRowsContext.Provider
            value={{
                presentRows,
                setPresentRows
            }}
        >
            {children}
        </PresentRowsContext.Provider>
    );
}

export { PresentRowsProvider };