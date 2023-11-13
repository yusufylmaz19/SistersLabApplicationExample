"use client";
import React, { useState, useEffect } from "react";
import { Container } from "../page";
import { Avatar, Skeleton, Box } from "@mui/material";
import { FlexBox } from "@/app/components/movieCard";
import { fetchCasts } from "@/app/utils/fetchservices";

export default function page({ params }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getAllCats = async () => {
    setLoading(true);
    fetchCasts(decodedName)
      .then((movie) => setMovies(movie))
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllCats();
  }, []);

  const decodedName = decodeURIComponent(params.name);

  return (
    <Container>
      <FlexBox flexDirection="column" alignItems="center">
        <FlexBox justifyContent="center" mb={4}>
          <Avatar
            src="/static/avatar.svg"
            sx={{
              width: "300px !important",
              height: "300px !important",
              cursor: "pointer",
            }}
          />
        </FlexBox>
        <h2>{decodedName}</h2>
        {loading ? (
          <Skeleton variant="rectangular" width={260} height={40} />
        ) : movies?.length > 0 ? (
          movies.map((movie, index) => (
            <Box width={260} key={index} border={1} p={1} mt={2}>
              {movie}
            </Box>
          ))
        ) : (
          <Box>there is no content</Box>
        )}
      </FlexBox>
    </Container>
  );
}
