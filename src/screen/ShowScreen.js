import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{navigation.getParam("id")}</Text>
      <Text>{blogPost.title}</Text>
      <Feather style={styles.icon} name="trash" />
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
  icon: {
    fontSize: 24
  }
});

export default ShowScreen;
