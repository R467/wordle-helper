import React, { useContext, useEffect } from "react";
import PresentLetter from "./PresentLetter";
import { PresentRowsProvider, PresentRowsContext } from "../contexts/PresentRowsContext";
import { ConfirmedLettersContext } from "../contexts/ConfirmedLettersContext";

function PresentLetters() {
    const { presentRows, setPresentRows} = useContext(PresentRowsContext);
    const { presentLetters, setPresentLetters } = useContext(ConfirmedLettersContext);

    function tryCreateNewRow() {

        const lastRow = presentRows[presentRows.length - 1];

        const anyPopulated = lastRow?.letters.filter((l) => {
            return l.populated;
        })


        if(lastRow && anyPopulated.length == 0) {
            return null;
        }

        return {
            letters: [
                {
                    order : 0,
                    populated: false
                },
                {
                    order : 1,
                    populated: false
                },
                {
                    order : 2,
                    populated: false
                },
                {
                    order : 3,
                    populated: false
                },
                {
                    order : 4,
                    populated: false
                }
            ]
        }

    }

    function letterUpdated(order, index, value) {

        const row = presentRows[index];
        const field = row[order];

        if(field != "") {
            row.letters[order].populated = true;

            setPresentLetters([...presentLetters, [order, value]]);
        }
        else {
            row.letters[order].populated = false;

            setPresentLetters(presentLetters.filter((e) =>{return e.value != value}));
        }

    }

    useEffect(() => {
        //Only add a new row if it's needed        
        if(presentRows.length == 0) {

            var newRow = tryCreateNewRow();
            if(newRow)
            {
                setPresentRows([...presentRows, newRow]);
            }            
        }
    });

    return (
        <div className="section">            
            <h2>Present letters</h2>

            <div className="presentLetters">                         
                {
                    presentRows
                    .map((row, index) => {
                        return (
                            <div key={index} data-row={index} className="presentLetterRow">     
                                <PresentLetter index={index} order={0} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />       
                                <PresentLetter index={index} order={1} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
                                <PresentLetter index={index} order={2} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
                                <PresentLetter index={index} order={3} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
                                <PresentLetter index={index} order={4} tryCreateNewRow={tryCreateNewRow} letterUpdated={letterUpdated} />
                            </div>
                        );
                    })   
                }                    
            </div>
        </div>
    );
        
}

export default PresentLetters;