import { fetchAllPosts } from "@/app/utils/fetchservices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  posts: [
    {
      id: 0,
      title: "",
      body: "",
      reacions: {
        like: 0,
        love: 0,
        haha: 0,
      },
    },
  ],
};

export const getPosts = createAsyncThunk("api/posts", async () => {
  try {
    const response = await fetchAllPosts();
    return { response };
  } catch (error) {
    console.error(error.message || "Something went wrong");
    throw error;
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const newPost = {
        id: state.posts.length + 1,
        title: action.payload.title,
        body: action.payload.body,
        reactions: {
          like: 0,
          love: 0,
          haha: 0,
        },
      };
      state.posts.push(newPost);
    },
    setReactions: (state, action) => {
      const { id, reaction } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[reaction] += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.response;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.error.message || "Something went wrong";
      state.loading = false;
    });
  },
});

export const { setPosts, setReactions } = postSlice.actions;

export default postSlice.reducer;
