import { fetchAllMovies } from "@/app/utils/fetchservices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  movies: [
    {
      name: "",
      year: 0,
      director: "",
      casts: [],
      img: "",
    },
  ],
};

export const getMovies = createAsyncThunk("api/movies", async () => {
  try {
    const response = await fetchAllMovies();
    return { response };
  } catch (error) {
    console.error(error.message || "Something went wrong");
    throw error;
  }
});

export const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.response;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.error = action.error.message || "Something went wrong";
      state.loading = false;
    });
  },
});

export const {} = extraSlice.actions;

export default extraSlice.reducer;
