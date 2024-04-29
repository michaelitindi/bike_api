import  fetchDataFromAPI  from "./manufacturers.js";

async function displayData() {
  try {
    const apiData = await fetchDataFromAPI(); 
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    // Display data from API 
    const api1Title = document.createElement('h2');
    api1Title.textContent = 'Bikes manufactured';
    outputElement.appendChild(api1Title);

    apiData.manufacturers.forEach(item => {   
      const itemElement = document.createElement('p');
      itemElement.textContent = `${item.name}: ${item.company_url}`;
      outputElement.appendChild(itemElement);
    });
  } catch (error) {
    throw new Error('There was a problem displaying the data:', error);
  }
}

export default displayData;