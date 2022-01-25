import React, { useContext } from "react";
import ConfirmedLetter from "./ConfirmedLetter";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";

function ConfirmedLetters() {

    const { confirmedLetters, setConfirmedLetters } = useContext(ConfirmedLettersContext);


    return (
        <div className="section">
            <h2>Confirmed letters</h2>
            <div className="confirmedLetters">     
                <ConfirmedLetter order={0} />       
                <ConfirmedLetter order={1} />
                <ConfirmedLetter order={2} />
                <ConfirmedLetter order={3} />
                <ConfirmedLetter order={4} />
            </div>
        </div>
    );
}

export default ConfirmedLetters;