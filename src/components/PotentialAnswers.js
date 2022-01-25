import React, { useContext } from "react";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";
import { WordList } from "../../WordList";

function PotentialAnswers() {
    const { confirmedLetters, setConfirmedLetters, eliminatedLetters, presentLetters } = useContext(ConfirmedLettersContext);

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
        
        if(elMatches) 
        {
            return false;
        }

        return true;
    }

    function checkPresentLetters(word) {
        /*const presentMatches = presentLetters.filter((pl) => {
            return pl != "" && word.includes(pl);
        })

        if(presentMatches?.length === presentLetters?.length) 
        {
            return true;
        }

        return false;*/

        const presentMatches = presentLetters.filter((pl) => {     
            
            if(word == "aback") {
                console.log("word", word)

                console.log("pl", pl);
                console.log("pl.value", pl.value)
                console.log("pl.order", pl.order)
                console.log("word[pl.order]", word[pl.order])
            }

            return pl[1] != "" && word.includes(pl[1]) && word[pl[0]] != pl[1];
        })

        if(presentMatches?.length === presentLetters?.length) 
        {
            return true;
        }

        return false;
    }
    
    let counter = 0;
    return (
        <div>
            {WordList.filter(word => 
                {                    
                    if(
                        checkedMatchedLetters(word) &&
                        checkEliminatedLetters(word) &&
                        checkPresentLetters(word)
                    )
                    return true;
                }
            )
            .map(function(letter){
                counter = counter + 1;
                return (
                    <div key={counter} className="potentialWord">{letter}</div>
                )
            })}
        </div>
    );

}

export default PotentialAnswers;