import CommentForm from './CommentForm'

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying'

  // const canDelete = currentUserId === comment.userId && replies.length === 0
  const canReply = Boolean(currentUserId)
  console.log(currentUserId)
  // const canEdit = currentUserId === comment.userId
  const replyId = parentId ? parentId : comment.id
  const createdAt = new Date(comment.createdAt).toLocaleDateString()
  return (
    <div key={comment.id} className="MKcomment">
      <div className="MKcom-box">
        <div className="MKcom-avatar">
          <div className="MKcom-avatar">
            <img src={comment.img} alt="" />
          </div>
        </div>
        <div className="">
          <div className=" d-flex">
            <div className="MKcom-name">
              <h4>{comment.username}</h4>
            </div>
            <div className="ml-3 MKreplybtn">
              <p>{createdAt}</p>
            </div>
          </div>
          <div className="MKcom-msn">
            <h4>{comment.body}</h4>
          </div>
          <div className="">
            {canReply && (
              <div
                className="MKreplybtn"
                onClick={() =>
                  setActiveComment({ id: comment.id, type: 'replying' })
                }
              >
                Reply
              </div>
            )}
          </div>
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
          )}
          {/* 留言 */}
          {replies.length > 0 && (
            <div className="MKrepliesBox1">
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply.id}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  addComment={addComment}
                  parentId={comment.id}
                  replies={[]}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comment
