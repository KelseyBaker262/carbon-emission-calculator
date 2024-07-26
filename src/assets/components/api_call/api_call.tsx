//This function fetches the data of a car journey's carbon emission from the API and console logs the result.
export default async function fetchData(changeType: string) {
	const urlChange = {
		model: "vehicle_estimate_by_model",
		type: "vehicle_estimate_by_type",
	};

	const distances = {
		distance: "10",
		units: "mi",
	};

	const vehicleModel = {
		make: ["vehicle_make", "Ford"],
		model: ["vehicle_model", "Aerostar Wagon"],
	};

	const vehicleType = {
		type: ["vehicle_type", "Bus-Coach"],
		fuel: ["fuel_type", "Petrol"],
	};

	const url: string = `https://carbonsutra1.p.rapidapi.com/${
		changeType === "car"
			? urlChange.model
			: changeType === "coach"
				? urlChange.type
				: urlChange.model
	}`;
	const data: FormData = new FormData(); // This saves a new object to a variable called data
	// Each of the lines below adds a key-value pair to the data variable
	if (changeType === "car") {
		data.append(vehicleModel.make[0], vehicleModel.make[1]);
		data.append(vehicleModel.model[0], vehicleModel.model[1]);
	} else if (changeType === "coach") {
		data.append(vehicleType.type[0], vehicleType.type[1]);
		data.append(vehicleType.fuel[0], vehicleType.fuel[1]);
	}
	data.append("distance_value", distances.distance);
	data.append("distance_unit", distances.units);

	const options = {
		// This is saving the type, header and body of the request to a variable called options
		method: "POST", // This is setting the type of request to POST
		headers: {
			// This is setting the headers of the request
			"x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
			"x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
			Authorization: import.meta.env.VITE_AUTHORIZATION,
		},
		body: data, // This is setting the body of the request to the data variable
	};

	try {
		const response = await fetch(url, options); // This is sending the request to the API
		if (!response.ok) {
			// If the response from the API is not ok, an error is thrown
			throw new Error(`HTTP error! status: ${response.status}`); // This will explain that there is an error and its status code
		}
		const result = await response.json();
		console.table(result.data)
		// This parses the response in JSON format and saves it in a variable name result
	} catch (error) {
		console.error(error); // This console logs the error if the request fails
	}
}
