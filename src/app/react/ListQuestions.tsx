import * as React from 'react';
// @ts-ignore
import listQuestionsRadioBtn from "@constants/mockups/listQuestionsRadioBtn.json";
import RadioQuestion from './RadioQuestion';
import {} from 'prop-types';

const ListQuestions = () => {
  const [showAllAnswers, setShowAllAnswers] = React.useState(false)

  // @ts-ignore
  return (
    <>
      {
        listQuestionsRadioBtn.map((question) => (
          <RadioQuestion question={question} key={`radioQuestion-${question.id}`} showAnswer={showAllAnswers}/>
        ))
      }
      <a className={`waves-effect waves-light btn marginSmall widthAuto transitionFade`} onClick={()=>{setShowAllAnswers(!showAllAnswers)}}>Check all answers</a>
    </>);
};

ListQuestions.propTypes = {

};

ListQuestions.defaultProps = {

};

export default ListQuestions;
