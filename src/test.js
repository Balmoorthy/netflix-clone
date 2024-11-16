const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmQ1MmYxODVkZDI4YTdjMThlMDdhY2Q4NjU4ZWYzZSIsIm5iZiI6MTczMTc2OTkzNy4xNDQ4Nzk2LCJzdWIiOiI2NzM4YjJjNzk2YmUzYTA2ZmFkOTI0NGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uuakQrIsTaJkwTTxL1-RgNmAC4z34R-bNFa2l39yg5k",
  },
};

fetch(
  "https://api.themoviedb.org/3/account/21634162/rated/movies?language=en-US&page=1&sort_by=created_at.asc",
  options
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
