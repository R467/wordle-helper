import { useState } from "react";

function useConfirmedLetters() {
    const [confirmedLetters, setConfirmedLetters] = useState(["","","","",""]);
    const [eliminatedLetters, setEliminatedLetters] = useState([]);

    return {
        confirmedLetters, 
        setConfirmedLetters,
        eliminatedLetters,
        setEliminatedLetters
    }
}

export default useConfirmedLetters;