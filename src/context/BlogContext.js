import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogPost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
        // if (blogPost.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //   return blogPost;
        // }
      });
    case "delete_blogPost":
      return state.filter(blogPost => blogPost.id !== action.payload);
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
    callback();
  };
};

const editBlogPost = dispatch => {
  return (title, content, id, callback) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
