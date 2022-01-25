import React, { useContext } from "react";
import { PresentRowsContext } from "../contexts/PresentRowsContext";

function PresentLetter({index, order, tryCreateNewRow, letterUpdated}) {

    const { presentRows, setPresentRows} = useContext(PresentRowsContext);

    let populated = true;

    function presentLetterEntered() {

        var newRow = tryCreateNewRow();
        if(newRow)
        {
            setPresentRows([...presentRows, newRow]);
        }    
    }
    

    return (   
        <div className="tile">
            <input 
                type="text"
                className="input" 
                maxLength="1"
                data-key={order}
                onChange={(e) => {
                    letterUpdated(order, index, e.target.value);
                    presentLetterEntered();
                } }
            />
           
        </div>
    );
}

export default PresentLetter;