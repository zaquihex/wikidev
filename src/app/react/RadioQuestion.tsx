import * as React  from 'react';
// @ts-ignore
import radioQuestionMkp from "@constants/mockups/questionRadioBtn.json"

const RadioQuestion = () => {
  // Update Radio buttons checked
  const [userSolution, setUserSolution] = React.useState(null);
  // Show solution on radio options
  const [showSolution, setShowSolution] = React.useState(false);
  // show question info
  const [showInfo, setShowInfo] = React.useState(false);


  return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{radioQuestionMkp.question}</span>
              <div className='flexColumn'>
              {
                radioQuestionMkp.options.map((optionInfo, posOption) => {
                  const checkedOption = userSolution === posOption;
                  const isColorGreen = showSolution && optionInfo.solution;
                  const isColorRed = showSolution && checkedOption && !optionInfo.solution;
                  const colorOption = isColorGreen ? 'colorGreen' : isColorRed ? 'colorRed' :  'colorWhite';
                  return (
                    <label>
                      <input className="with-gap" name="group1" type="radio" checked={checkedOption} onClick={()=>{setUserSolution(posOption)}} />
                      <span className={`${colorOption}`}>{optionInfo.option}</span>
                    </label>
                  );
                })
              }
              </div>
            </div>
            <div className="card-action">
              <div className="flex centerContainer" style={{maxHeight: '50px'}}>
                <a className='btnCursor widthAuto' onClick={()=>{setShowInfo(!showInfo)}}>Show info</a>
                <div className={`colorWhite transitionFade ${showInfo ? 'appear' : 'disappear'}`} style={{width: showInfo ? '70%' :  '0%'}}>
                  {radioQuestionMkp.info}
                </div>
                <a className={`waves-effect waves-light btn marginSmall widthAuto transitionFade ${showInfo ? 'disappear' : 'appear'}`} onClick={()=>{setShowSolution(!showSolution)}}>{showSolution ? 'hide answer' : 'check answer'}</a>
              </div>
              </div>
          </div>
        </div>
      </div>)
}

export default RadioQuestion;
