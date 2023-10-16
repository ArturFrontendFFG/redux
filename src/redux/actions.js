import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

// with call function in component Likes
export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};
export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};
export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: {
      text,
      id,
    },
  };
};
export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: {
      text,
      id,
    },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    data: {
      id,
    },
  };
};
export const loaderOn = () => {
  return {  
    type: LOADER_DISPLAY_ON,
  };
};
export const loaderOff = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};
export const commentsLoad = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({
        type: COMMENTS_LOAD,
        data: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn("Ошибка API"));
      dispatch(loaderOff());
    }
  };
};
export const errorOn = (text) => {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });
    setTimeout(() => {
      dispatch(errorOff())
    }, 3000 )
  };
};
export const errorOff = () => {
  return {
    type: ERROR_DISPLAY_OFF,
  };
};

//without call function in component Likes
// export const incrementLikes = {
//     type: INCREMENT
// }
// export const decrementLikes = {
//     type: DECREMENT
// }
