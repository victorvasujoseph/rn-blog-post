import React, { useContext,useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues}) => {
  const [content, setContent] = useState(initialValues.content);
  const [title, setTitle] = useState(initialValues.title);

  return (
    <View>
      <Text style={styles.label}>Title : </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Content : </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      ></TextInput>
      <Button title="Save Post" onPress={()=>{
        onSubmit(title,content);
      }} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title:'',
    content:''
  }
}


const styles = StyleSheet.create({
  headerText: {
    margin: 20,
    fontSize: 30,
    color: "blue"
  },
  post: {
    fontSize: 18
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 10
  }
});

export default BlogPostForm;
