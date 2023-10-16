import { useEffect, useState } from "react";
import { commentDelete, commentUpdate } from "./redux/actions";
import { useDispatch } from "react-redux";

const SingleComment = ({ data }) => {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();

  const { text, id } = data;

  useEffect(() => {
    text && setTextComment(text);
  }, [text]);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(textComment, id));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdate} action="#" className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <div style={{display: 'flex', gap: '15px'}}>
        <input type="text" value={textComment} onChange={handleInput} />
        <p>{id}</p>
      </div>

      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
