import React from 'react'
import LikeQuestion from './LikeQuestion'
import CommentQuestion from './CommentQuestion'
import SaveQuestion from './SaveQuestion'
import DislikeQuestion from './DislikeQuestion'

function InteractQuestion() {
  return (
    <div>
        <ul>
          <LikeQuestion/>
          <DislikeQuestion/>
          <CommentQuestion/>
          <SaveQuestion/>
        </ul>
          
    </div>
  )
}

export default InteractQuestion
