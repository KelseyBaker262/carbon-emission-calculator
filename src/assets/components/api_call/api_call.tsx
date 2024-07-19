//This function fetches the data of a car journey's carbon emission from the API and console logs the result.  
export default async function fetchData() {
    const url = "https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_model";
    const data = new FormData(); // This saves a new object to a variable called data
    // Each of the lines below adds a key-value pair to the data variable
    data.append("vehicle_make", "Ford"); 
    data.append("vehicle_model", "Aerostar Wagon"); 
    data.append("distance_value", "42"); 
    data.append("distance_unit", "mi"); 

    const options = { // This is saving the type, header and body of the request to a variable called options
        method: "POST", // This is setting the type of request to POST
        headers: { // This is setting the headers of the request
            "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
            "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
            Authorization: import.meta.env.VITE_AUTHORIZATION,
        },
        body: data,// This is setting the body of the request to the data variable
    };

    try {
        const response = await fetch(url, options); // This is sending the request to the API
        if (!response.ok) { // If the response from the API is not ok, an error is thrown 
            throw new Error(`HTTP error! status: ${response.status}`); // This will explain that there is an error and its status code
        }
        const result = await response.json(); // This parses the reponse in JSON format and saves it in a variable name result
        console.log(result.data.co2e_kg); // This console logs the carbon emission calculated by the API resquest
    } catch (error) {
        console.error(error); // This console logs the error if the request fails
    }
}
