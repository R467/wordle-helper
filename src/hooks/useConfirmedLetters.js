import { useState } from "react";

function useConfirmedLetters() {
    const [confirmedLetters, setConfirmedLetters] = useState(["","","","",""]);

    return {
        confirmedLetters, 
        setConfirmedLetters
    }
}

export default useConfirmedLetters;