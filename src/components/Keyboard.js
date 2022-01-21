import KeyboardLetter from "./KeyboardLetter";

function Keyboard() {

    return (
        <div className="keyboard">
            <h2>Eliminated letters</h2>
            <div className="keyboardRow">
                <KeyboardLetter value="q"/>
                <KeyboardLetter value="w"/>
                <KeyboardLetter value="e"/>
                <KeyboardLetter value="r"/>
                <KeyboardLetter value="t"/>
                <KeyboardLetter value="y"/>
                <KeyboardLetter value="u"/>
                <KeyboardLetter value="i"/>
                <KeyboardLetter value="o"/>
                <KeyboardLetter value="p"/>
            </div>
            <div className="keyboardRow">
                <KeyboardLetter value="a"/>
                <KeyboardLetter value="s"/>
                <KeyboardLetter value="d"/>
                <KeyboardLetter value="f"/>
                <KeyboardLetter value="g"/>
                <KeyboardLetter value="h"/>
                <KeyboardLetter value="j"/>
                <KeyboardLetter value="k"/>
                <KeyboardLetter value="l"/>
            </div>
            <div className="keyboardRow">
                <KeyboardLetter value="z"/>
                <KeyboardLetter value="x"/>
                <KeyboardLetter value="c"/>
                <KeyboardLetter value="v"/>
                <KeyboardLetter value="b"/>
                <KeyboardLetter value="n"/>
                <KeyboardLetter value="m"/>
            </div>
        </div>
    );
}

export default Keyboard;