"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, setPosts, setReactions } from "../store/slices/postSlice";
import { fetchAllPosts } from "../utils/fetchservices";
import { TextField, Box, styled, Button } from "@mui/material";

const FlexColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1rem",
});

const FlexRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  flexWrap: "wrap",
});

const Container = styled(Box)({
  width: "85%",
  margin: "1rem auto",
});

const Post = styled(Box)({
  width: "200px",
  border: "1px solid black",
  padding: "1rem",
  position: "relative",
});

const ReactionContainer = styled(Box)({
  position: "absolute",
  bottom: 0,
});

const Reaction = styled(Box)({
  display: "inline-block",
  padding: "0.5rem",
  fontSize: "1.2rem",
  cursor: "pointer",
});

export default function page() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const fetchPosts = async () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    dispatch(setPosts(form));
    form.title = "";
    form.body = "";
  };

  const handleReaction = async (id, reaction) => {
    dispatch(setReactions({ id, reaction }));
  };

  return (
    <Container>
      <FlexColumn>
        <Box>Title</Box>
        <TextField
          type="text"
          variant="outlined"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Box>Body</Box>
        <TextField
          type="text"
          variant="outlined"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <Button type="Button" variant="contained" onClick={handlePost}>
          Post
        </Button>
      </FlexColumn>
      <FlexRow mt={4}>
        {posts.map((post, index) => (
          <Post key={index}>
            <Box>{post.title}</Box>
            <Box my={4}>{post.body}</Box>
            <ReactionContainer mt={4}>
              <Reaction
                onClick={() => {
                  handleReaction(post.id, "like");
                }}
              >
                ❤️{post.reactions?.like}
              </Reaction>
              <Reaction
                onClick={() => {
                  handleReaction(post.id, "love");
                }}
              >
                👍{post.reactions?.love}
              </Reaction>
              <Reaction
                onClick={() => {
                  handleReaction(post.id, "haha");
                }}
              >
                🤣{post.reactions?.haha}
              </Reaction>
            </ReactionContainer>
          </Post>
        ))}
      </FlexRow>
    </Container>
  );
}
