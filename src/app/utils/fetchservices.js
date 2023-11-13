export const fetchAllMovies = async () => {
  try {
    const req = await fetch("/api/movies");
    const res = req.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCasts = async (name) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const req = await fetch(`/api/casts/${name}`);
    const res = req.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};
