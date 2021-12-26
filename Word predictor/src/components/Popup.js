import React, { useEffect,useState, useRef } from 'react';
import { checkWin } from '../helpers/helpers';
import useWindowSize from "@rooks/use-window-size"
import Confetti from 'react-confetti'


const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  const { innerWidth, innerHeight } = useWindowSize();
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  const [score,incScore] = useState(0);
  // const [playable, setPlayable] = useState(true);

  

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
    console.log(score);
    return (<>
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Play Again</button>
        
     
   </div>
   </div>
   <Confetti width={innerWidth}  height={innerHeight} /></>)
  
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }
  

  return (
    <>
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
     
   </div>
   </div>
    </>
  )
}

export default Popup
