import { errorOn } from "./actions";
import { COMMENT_CREATE } from "./types";

const badWords = String(
  "бля-блябу-блябуду-блядун-блядунья-блядь-блядюга-взьебка-выпердеть-говно-говнядин-дристануть-дристун-дристуха-дрочена-дрочила-дрочилка-дрочить-дрочка-ебало-ебальник-ебануть-хуерик-хуесос-хуище-хуй-хуйня-хуйрик-хуякать-хуякнуть-целка-шлюха"
).split("-");

export const spamFilter = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hasBadWords) {
          return dispatch(errorOn("Слово является не пристойным"));
        }
      }
      return next(action);
    };
  };
};
