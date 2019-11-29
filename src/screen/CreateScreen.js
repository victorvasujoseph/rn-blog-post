import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const { addBlogPost } = useContext(BlogContext);

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
      <Button title="Add Post" onPress={() => addBlogPost(title, content)} />
    </View>
  );
};

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

export default CreateScreen;
