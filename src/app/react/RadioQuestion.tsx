import * as React  from 'react';

// @ts-ignore
//import radioQuestionMkp from "../../constants/mockups/questionRadioBtn.json";
import radioQuestionMkp from "@constants/mockups/questionRadioBtn.json"

const RadioQuestion = () => {
  const [userSolution, setUserSolution] = React.useState(null);
  const [showSolution, setShowSolution] = React.useState(false);

  return (
    <>
      <span>{radioQuestionMkp.question}</span>
      {
        radioQuestionMkp.options.map(optionInfo => (
          <div className="field">
            <input type="radio" name={optionInfo.option} checked={userSolution === optionInfo.option} onClick={()=>{setUserSolution(optionInfo.option)}} />
            <label>Option 1</label>
          </div>
        ))
      }
      <button onClick={()=>{setShowSolution(!showSolution)}}>{showSolution ? 'hide question' : 'check Question'}</button>
      {showSolution ?
        <div>
          <h2>Solution</h2>
          <div>{radioQuestionMkp.info}</div>
        </div> : null}
    </>)
}

export default RadioQuestion;


/*

import * as React  from 'react';
// @ts-ignore
//import radioQuestionMkp from "../../constants/mockups/questionRadioBtn.json";
import radioQuestionMkp from "@constants/mockups/questionRadioBtn.json"

const RadioQuestion = () => {
  const [userSolution, setUserSolution] = React.useState(null);
  const [showSolution, setShowSolution] = React.useState(false);

  return (
    <>
      <span>{radioQuestionMkp.question}</span>
      {
        radioQuestionMkp.options.map(optionInfo => (
          <div className="field">
            <input type="radio" name={optionInfo.option} checked={userSolution === optionInfo.option} onClick={()=>{setUserSolution(optionInfo.option)}} />
            <label>Option 1</label>
          </div>
        ))
      }
      <button onClick={()=>{setShowSolution(!showSolution)}}>{showSolution ? 'hide question' : 'check Question'}</button>
      {showSolution ?
        <div>
        <h2>Solution</h2>
        <div>{radioQuestionMkp.info}</div>
      </div> : null}
    </>)
}

export default RadioQuestion;


 */
