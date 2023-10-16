import {
  COMMENTS_LOAD,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
} from "./types";

const initialState = {
  comments: [],
  id: 1,
};
export const commentReducer = (state = initialState, action) => {
  console.log("reducer comments > ", action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;

      const itemIdx = comments.findIndex((res) => res.id === data.id);

      const nextComment = [
        ...comments.slice(0, itemIdx),
        data,
        ...comments.slice(itemIdx + 1),
      ];
      return {
        ...state,
        comments: nextComment,
      };
    case COMMENT_DELETE:
      return (() => {
        const { data } = action;
        const arrayWithoutOneElement = [
          ...state.comments.filter((item) => item.id !== data.id),
        ];
        return {
          ...state,
          comments: arrayWithoutOneElement,
        };
      })();
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((item) => {
        return {
          text: item.title,
          id: item.id,
        };
      });
      return {
        ...state,
        commentsNew
      }

    default:
      return state;
  }
};
