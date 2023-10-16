import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate, commentsLoad } from "./redux/actions";
import styled from "styled-components";
const Comments = (props) => {
  const [textComment, setTextComment] = useState("");

  const comments = useSelector((state) => {
    const { commentReducer } = state;
    return commentReducer.comments;
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const line = e.target.value;
    setTextComment(line);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} action="#" className="comment-item-create">
        <input
          type="text"
          placeholder="Enter Comments"
          value={textComment}
          onChange={handleInput}
        />
        <input type="submit" hidden />
      </form>
      <WrapperComments>
        {!!comments.length &&
          comments.map((item) => <SingleComment key={item.id} data={item} />)}
      </WrapperComments>
    </div>
  );
};
const WrapperComments = styled.div`
  height: calc(100vh - 20vh); 
  overflow-y: auto;
`;
export default Comments;
