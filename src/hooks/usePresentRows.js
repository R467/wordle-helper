import { useState } from "react";
import PresentLetter from "../components/PresentLetter";

function usePresentRows() {    

    const [presentRows, setPresentRows] = useState([]);

    return {
        presentRows,
        setPresentRows,
    }
}

export default usePresentRows;