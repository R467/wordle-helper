import React, { useContext } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";

function ConfirmedLetter({order}) {

    const { confirmedLetters, setConfirmedLetters, eliminatedLetters, setEliminatedLetters } = useContext(ConfirmedLettersContext);

    function letterChanged(index, value){

        const letters = confirmedLetters.slice();
        letters[index] = value;

        setConfirmedLetters(letters);    
    }

    return (   
        <div className="tile">
            <input 
                type="text"
                className="input" 
                maxLength="1"
                data-key={order}
                onChange={(e) => {
                    letterChanged(e.target.attributes.getNamedItem("data-key").value, e.target.value)
                } }
            />
           
        </div>
    );
}

export default ConfirmedLetter;