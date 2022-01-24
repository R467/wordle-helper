import React, { useContext, useEffect } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";

function KeyboardLetter({value}) {

    const { confirmedLetters, setConfirmedLetters, 
            eliminatedLetters, setEliminatedLetters,
            presentLetters, setPresentLetters
        } = useContext(ConfirmedLettersContext);

    function updateState() {
        
        if(confirmedLetters.includes(value)) return;

        //blank -> eliminated -> present -> blank

        if(eliminatedLetters.includes(value)) {
            //Remove from eliminated letters
            setEliminatedLetters(eliminatedLetters.filter((e) =>{return e != value}));

            //Add to present letters
            setPresentLetters([...presentLetters, value]);
        }
        else if (presentLetters.includes(value))
        {
            //Remove from both
            setEliminatedLetters(eliminatedLetters.filter((e) =>{return e != value}));
            setPresentLetters(presentLetters.filter((e) =>{return e != value}));
        }
        else {

            //Add to eliminated letters
            setEliminatedLetters([...eliminatedLetters, value]);

            //Remove from present letters
            setPresentLetters(presentLetters.filter((e) =>{return e != value}));
        }
    }

    function calculateState(){

        if(confirmedLetters.includes(value)) return "correct";

        if(eliminatedLetters.includes(value)) return "eliminated";

        if(presentLetters.includes(value)) return "present";

        return "";
    }

    return (
        <button 
            data-key={value} 
            data-state={calculateState()} 
            onClick={(e) => {updateState()}}
        >{value}</button>
    );
}

export default KeyboardLetter;