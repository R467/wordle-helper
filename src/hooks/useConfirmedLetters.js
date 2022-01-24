import { useState } from "react";

function useConfirmedLetters() {
    const [confirmedLetters, setConfirmedLetters] = useState(["","","","",""]);
    const [eliminatedLetters, setEliminatedLetters] = useState([]);
    const [presentLetters, setPresentLetters] = useState([]);

    return {
        confirmedLetters, 
        setConfirmedLetters,
        eliminatedLetters,
        setEliminatedLetters,
        presentLetters,
        setPresentLetters
    }
}

export default useConfirmedLetters;