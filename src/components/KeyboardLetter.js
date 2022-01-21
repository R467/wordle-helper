import React, { useContext, useEffect } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";

function KeyboardLetter({value}) {

    const { confirmedLetters, setConfirmedLetters, eliminatedLetters, setEliminatedLetters } = useContext(ConfirmedLettersContext);

    function updateState() {

        if(confirmedLetters.includes(value)) return;

        if(eliminatedLetters.includes(value)) {
            setEliminatedLetters(eliminatedLetters.filter((e) =>{return e != value}));
        }
        else {
            setEliminatedLetters([...eliminatedLetters, value]);
        }
    }

    function calculateState(){

        if(confirmedLetters.includes(value)) return "correct";

        if(eliminatedLetters.includes(value)) return "eliminated";

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