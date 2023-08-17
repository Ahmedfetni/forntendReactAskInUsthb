import React from 'react'
import InteractQuestion from './QuestionCompopnents/InteractQuestion'

function QuestionCard(checked:boolean, questionTitle:string,questionBody:string) {
  
      return (

    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" checked={checked} />
      <div className="collapse-title text-xl font-medium">
        {questionTitle}
      </div>
      <div className="collapse-content">
        <ul className="vertical-collapse-content-list">
          <li>
            <div className="question-text-body">
              <p>{questionBody}</p>
            </div>
          </li>
          <InteractQuestion/>
        </ul>
      </div>
    </div>

  )
}

export default QuestionCard
