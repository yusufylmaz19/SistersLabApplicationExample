"use client";
import React from "react";
import axios from "axios";

export default function page() {
  const getMovies = () => {
    axios
      .get("/api/movies")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
    // fetch("/api/movies")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const postMovies = (id) => {
    axios.post("/api/users", {
      id,
    });

    fetch("url", {
      method: "POST",
      body: {
        id,
      },
    });
  };

  const getCastByName = async (name) => {
    try {
      const response = await axios.get(`api/casts/${name}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieByID = async (id) => {
    try {
      // const response = await axios.get(`api/movies?id=${id}`);
      const response = await axios.get(`api/movies`, {
        params: {
          id,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={getMovies}>Get All Movies</button>
      <button onClick={() => postMovies(id)}>Post</button>
      <button onClick={() => getCastByName("Tim Robbins")}>Get Cast</button>
      <button onClick={() => getMovieByID(1)}>Get Movie By ID</button>
    </div>
  );
}
