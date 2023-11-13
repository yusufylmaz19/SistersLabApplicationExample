"use client";
import React, { useEffect, useState, useCallback } from "react";
import { styled, Box, TextField, Stack } from "@mui/material";
import MovieCard from "../components/movieCard";
import { fetchAllMovies } from "../utils/fetchservices";

export const Container = styled(Box)({
  width: "85%",
  margin: "1rem auto",
});

export default function page() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllMovies = async () => {
    setLoading(true);
    fetchAllMovies()
      .then((movies) => setMovies(movies))
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const filteredMovies = useCallback(
    movies?.filter((movie) => {
      return movie.name.toLowerCase().includes(search.toLowerCase());
    }),
    [search, movies]
  );

  useEffect(() => {
    console.log("filtered çalıştı");
  }, [filteredMovies]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <Container>
      <TextField
        id="fullWitdh"
        label="Search"
        fullWidth
        variant="standard"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={() => setLoading(!loading)}>tıkla</button>

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredMovies.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Stack>
    </Container>
  );
}
