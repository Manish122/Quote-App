import React from 'react'
import Footer from './Footer';

export default function Instruction() {
    const mystyle = {
        padding: "20px 30px",
        position: "relative",
        margin: "auto",
        height: "120vh",
        width: "1000px",
        backgroundColor:"#32d8d8",
        fontWeight: "bold",
        color:"black",
        overFlow:'hidden'
      };
    return (
        <>
         <div style = {mystyle} id="instruction">
        <h1>HANGMAN INSTRUCTIONS</h1><br/>
Your goal is to guess the word to save the player from the hungry monster. Fill in the blanks by guessing one letter at a time to see if it’s in the word
 Click on the letter to guess it, or type it with your keyboard. If you have guessed correctly, the letter will appear in the blank spaces. Try to guess the word
  or phrase when you have enough correct letters on the board. 
<br/><br/>
 

Select a letter not in the word, a balloon will pop! Watch out - when all the balloons are popped, you’ll fall to the ground and get gobbled up!

 <br/><br/>

Look at the blank spaces and try to guess the word, remember to keep the theme in mind – it may help you solve the puzzle! 
<br/><br/>
 

Each time you solve a word, the balloons you save are added to your score. Up for a challenge? Increase the difficulty and you'll have fewer balloons to hang on to!

 <br/><br/>
 <hr/>

<h1>HANGMAN TIPS & STRATEGIES</h1><br/><br/>
Use your vowels. Looking at vowels is a good way to start. Since there are only 5, you can fill in some blanks pretty quickly. They can even help you guess the answer straight away. For example, if you try the letter A and the word looks like this ‘_A_A_A’, you might be able to guess straight away that the answer is BANANA just from one letter.

 <br/><br/>

Etaoin shrdlu. "Etaoin shrdlu" is two words listing the most commonly used letters in the English language, in order of frequency. "E" is the most commonly used letter, "t" is second-most common, etc. After trying your vowels, try out a few letters from this list to see if they appear in the word!

 <br/><br/>

Break down phrases. When trying to guess a phrase, break it up and look at each word rather than focus on the letters. If you can guess just one word then it may lead you to the other words in the saying. You can also use the tip at the top of the window for extra help.
<br/><br/>
 

Don’t forget your Js and Zs. The letters J and Z always trip people up. They’re both fairly rare and it’s not always obvious when you need one to complete a word or phrase. Don’t guess a Z or a J at the very beginning, but keep them in mind as you play.
<br/><br/>
 


</div>
   <Footer />
  </>
        
    )
}
