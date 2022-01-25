import React, { useContext } from "react";
import { PresentRowsContext } from "../contexts/PresentRowsContext";

function PresentLetter({index, order, tryCreateNewRow, letterUpdated}) {

    const { presentRows, setPresentRows} = useContext(PresentRowsContext);

    let state = "foo";

    function presentLetterEntered() {

        var newRow = tryCreateNewRow();
        if(newRow)
        {
            setPresentRows([...presentRows, newRow]);
        }    
    }

    function calculateState() {

        const row = presentRows[index];
        const field = row.letters[order];

        if(field.populated) return "present";

        return;
    }


    return (   
        <div className="tile">
            <input 
                type="text"
                className="input" 
                maxLength="1"
                data-key={order}
                data-state={calculateState()}
                onChange={(e) => {
                    letterUpdated(order, index, e.target.value);
                    presentLetterEntered();
                } }
            />
           
        </div>
    );
}

export default PresentLetter;