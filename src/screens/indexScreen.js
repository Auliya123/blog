import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { BlogContext } from "../context/BlogContext";

const indexScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>Index screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default indexScreen;
