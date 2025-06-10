async function fetchSwapidata() {
    try {
      const URL = "https://swapi.dev/api/people/1/";
  
      const response = await fetch(URL);
  
      if (!response.ok) {
        throw new Error();
      }
  
      const result = await response.json();
  
      console.log(result);
    } catch (error) {
      console.log("An error occured while fetching data from the API");
    }
  }
  
  fetchSwapidata();