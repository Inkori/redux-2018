const ADD_VIDEO = "ADD_VIDEO";
const EDIT_VIDEO = "EDIT_MODE";
const REMOVE_VIDEO = "REMOVE_VIDEO";

const INIT = [];

export default function videosReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDEO:
      const newItem = {
        id: String(Math.random()),
        title: payload.title,
        url: payload.url,
        tags: payload.tags
      };

      return [newItem, ...state];

    case EDIT_VIDEO:
      return state.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            title: payload.title,
            tags: payload.newTags
          };
        }
        return item;
      });
    case REMOVE_VIDEO:
      return state.filter(item => {
        return item.id !== payload.id;
      });

    default:
      return state;
  }
}

export const addVideo = ({ title, url, tags }) => ({
  type: ADD_VIDEO,
  payload: { title, url, tags }
});

export const editVideo = (id, newTitle, newTags) => ({
  type: EDIT_VIDEO,
  payload: { id, newTitle, newTags }
});

export const deleteItem = id => ({
  type: REMOVE_VIDEO,
  payload: { id }
});
