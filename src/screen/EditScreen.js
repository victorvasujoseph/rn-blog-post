import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const BlogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title,content)=>{
        editBlogPost(title, content, navigation.getParam("id"),()=>navigation.pop())
      }
      }
    />
  );
};

export default EditScreen;
