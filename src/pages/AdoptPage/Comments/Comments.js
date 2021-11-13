import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from '../Comments/CommentsApi'

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  )
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data)
    })
  }, [])

  return (
    <div className="MKrowComment">
      <div className="MKcomm">
        <div className="MKcom-header">
          <h6 className="MKcom-header-title">留言板</h6>
        </div>
        <CommentForm submitLabel="send" handleSubmit={addComment} />

        <div className="">
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comments
