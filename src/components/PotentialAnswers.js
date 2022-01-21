import React, { useContext } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";
import { WordList } from "../../WordList";

function PotentialAnswers() {
    const { confirmedLetters, setConfirmedLetters, eliminatedLetters } = useContext(ConfirmedLettersContext);

    function checkedMatchedLetters(word){
        return checkMatchedLetter(0, word) &&
        checkMatchedLetter(1, word) &&
        checkMatchedLetter(2, word) &&
        checkMatchedLetter(3, word) &&
        checkMatchedLetter(4, word)
    }

    function checkMatchedLetter(index, word){

        //Ignore blank confirmed letters
        if(confirmedLetters[index] === "") return true;

        //Match on confirmed letters
        if(confirmedLetters[index] === word[index]) return true;

        return false;        
    }

    function checkEliminatedLetters(word){
        const elMatches = eliminatedLetters.find((el) => {
            return el != "" && word.includes(el);
        })

        if(word === "zonal")
        {
            console.log(word);
            console.log("elMatches", elMatches);
        }
        
        
        if(elMatches) 
        {
            return false;
        }

        return true;
    }
    
    let counter = 0;
    return (
        <div>
            {WordList.filter(word => 
                {                    
                    if(
                        checkedMatchedLetters(word) &&
                        checkEliminatedLetters(word)
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