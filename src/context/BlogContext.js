import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      console.log(action.payload);
      return action.payload;
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
  return async (title, content, callback) => {
    await jsonServer.post("blogposts", { title, content });
    if (callback) {
      callback();
    }
  };

  // return (title, content, callback) => {
  //   dispatch({ type: "add_blogPost", payload: { title, content } });
  //   if (callback) {
  //     callback();
  //   }
  // };
};

const getBlogPost = dispatch => {
  return async () => {
    const reponse = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogPost", payload: reponse.data });
  };
};

const editBlogPost = dispatch => {
    return async(title, content, id, callback) => {
    const reponse = await jsonServer.put(`/blogposts/${id}`,{title, content});
    dispatch({ type: "edit_blogPost", payload: reponse.data });
    callback();
  };
  // return (title, content, id, callback) => {
  //   dispatch({ type: "edit_blogPost", payload: { id, title, content } });
  //   callback();
  // };
};

const deleteBlogPost = dispatch => {
   return async id => {
    const reponse = await jsonServer.delete(`/blogposts/${id}`);
    // For now just use the same list, you can do a get similar to getBlogPost
    dispatch({ type: "get_blogPost", payload: id });
  };
  // return id => {
  //   dispatch({ type: "delete_blogPost", payload: id });
  // };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
