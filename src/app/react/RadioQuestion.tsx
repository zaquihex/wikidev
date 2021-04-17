import * as React   from 'react';
import { instanceOf, number } from 'prop-types'
import {useEffect} from 'react';
// @ts-ignore
//import radioQuestionMkp from "@constants/mockups/questionRadioBtn.json"

const getBackgroundColorByLevel = (level) => {
  switch(level) {
    case 1: return 'teal lighten-3';
    case 2: return ' light-blue darken-4';
    case 3: return 'red lighten-1';
    default: return 'blue-grey darken-1';
  }
}


const RadioQuestion = ({ idQuestion, question, showAnswer }) => {
  // Update Radio buttons checked
  const [userSolution, setUserSolution] = React.useState(null);
  // Show solution on radio options
  const [showSolution, setShowSolution] = React.useState(showAnswer);

  useEffect(()=>{
    setShowSolution(showAnswer);
  },[showAnswer])

  // show question info
  const [showInfo, setShowInfo] = React.useState(false);


  const backgroundColor = getBackgroundColorByLevel(question.level);


  return (
    !question ? null :
      <div className="row">
        <div className="col s12 m6">
          <div className={`card ${backgroundColor}`}>
            <div className="card-content white-text">
              <div className="flex">
                <img src={`../../assets/topic/${question.topic}.png`} className="cornerLeft widthIcon marginSmall" />
                <span className="card-title">{question.question}</span>
              </div>
              <div className='flexColumn'>
              {
                question.options.map((optionInfo, posOption) => {
                  const checkedOption = userSolution === posOption;
                  const isColorGreen = showSolution && optionInfo.solution;
                  const isColorRed = showSolution && checkedOption && !optionInfo.solution;
                  const colorOption = isColorGreen ? 'colorGreen' : isColorRed ? 'colorRed' :  'colorWhite';
                  return (
                    <label key={`optionLabel-${idQuestion}-${posOption}`}>
                      <input className="with-gap" name="group1" type="radio" checked={checkedOption} onChange={()=>{setUserSolution(posOption)}} />
                      <span className={`${colorOption}`}>{optionInfo.option}</span>
                    </label>
                  );
                })
              }
              </div>
            </div>
            <div className="card-action">
              <div className="flex centerContainer" style={{maxHeight: '50px'}}>
                <a className='btnCursor widthAuto ' onClick={()=>{setShowInfo(!showInfo)}}>Show info</a>
                <div className={`colorWhite transitionFade ${showInfo ? 'appear' : 'disappear'}`} style={{width: showInfo ? '70%' :  '0%'}}>
                  {question.info}
                </div>
                <a className={`waves-effect waves-light btn marginSmall widthAuto transitionFade ${showInfo ? 'disappear' : 'appear'}`} onClick={()=>{setShowSolution(!showSolution)}}>{showSolution ? 'hide answer' : 'check answer'}</a>
              </div>
              </div>
          </div>
        </div>
      </div>)
}

RadioQuestion.propTypes = {
  idQuestion: number.isRequired,
  question: instanceOf(Object).isRequired
}

export default RadioQuestion;
