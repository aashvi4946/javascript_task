const URL = "https://api.thedogapi.com/v1/breeds";

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("An error occurred while fetching data from the API");
  });