import React, { useContext } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";
import { WordList } from "../../WordList";

function PotentialAnswers() {
    const { confirmedLetters, setConfirmedLetters } = useContext(ConfirmedLettersContext);

    function checkLetter(index, word){

        if(confirmedLetters[index] === "") return true;

        return confirmedLetters[index] === word[index];
    }
    
    let counter = 0;
    return (
        <div>
            {WordList.filter(word => 
                {                    
                    if(
                        checkLetter(0, word) &&
                        checkLetter(1, word) &&
                        checkLetter(2, word) &&
                        checkLetter(3, word) &&
                        checkLetter(4, word)
                    )
                    return true;
                }
            )
            .map(function(letter){
                counter = counter + 1;
                return (
                    <div key={counter}>{letter}</div>
                )
            })}
        </div>
    );

}

export default PotentialAnswers;