import React, { useState } from 'react';

function getBoxes(word) {
    if(!word) {
        return new Array(5).fill('_');
    }
    return word.padEnd(5, '_').split('');
}

const Line = ({word, answer}) => {
    const boxes = getBoxes(word);

    return (
        <>
            <div className="line" >
                {boxes.map((char, index) =>{
                    let cl = 'box';
                    if(char === answer[index]) {
                        cl += ' correct';
                    } else if(answer.includes(char)) {
                        cl += ' rightChar'
                    } else if(char!="_") {
                        cl += ' wrong'
                    }
                    return (
                        <div key={index} className={cl} >
                            {char}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
function getLastNullIndex(arrGuess) {
    return arrGuess.findIndex((v)=> {
        if(v === null){
            return true;
        } else if(v.length < 5) {
            return true
        } else {
            return false;
        }
    });
}
export default function Wordle() {
    const [currentWord, setCurrentWord] = useState('');
    const [guess, setGuess] = useState([...new Array(6).fill(null)]);
    const [answer, setAnswer] = useState('hello');
    const [stopGame, setStopGame] = useState(false);
    const getWord = (event)=>{
        const val = event.target.value.toLowerCase();
        setCurrentWord(val);
        const index = getLastNullIndex(guess);
        guess[index] = val;
        setGuess([...guess]);
    };

    const submitWord = () => {
        // if currentWord === answer stop the game;
        if(currentWord.toLowerCase() === answer.toLowerCase()) {
            alert("Yea...!!! You guessed correct word...");
            setStopGame(true);
        }
        setCurrentWord('');
    }
    return (
        <>  
            <div className="wordle-container" >
                {guess.map((word, index)=>{
                    return <Line key={index} word={word} answer={answer} />
                })}
                <br/>
                <input 
                    type="text" 
                    onChange={getWord} 
                    id="word" 
                    disabled={stopGame}
                    value={currentWord}
                    placeholder="Guess 5 letter word" 
                    maxLength={5} /> <br />
                <button onClick={submitWord} disabled={currentWord.length!==5} >Submit</button>
                {currentWord}
            </div>
        </>
    )
}
