export const apiFetch = async () => {
  const url =
    "https://nomad-list-cities.p.rapidapi.com/nomad-list?size=30&page=1&sort=desc&sort_by=overall_score";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "nomad-list-cities.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
