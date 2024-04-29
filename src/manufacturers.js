async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://bikeindex.org/api/v3/manufacturers');
      
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data;
  
  } catch (error) {
    throw new Error('There was a problem fetching data from the API:' , error);
  }
}

export default fetchDataFromAPI;
