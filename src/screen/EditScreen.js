import React,{useContext} from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const BlogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );
  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content}}
      onSubmit={(title,content)=>{
        console.log("Saved");
      }}
    />
  );
};

export default EditScreen;
