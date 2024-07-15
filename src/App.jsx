import "./App.scss";
import fetchData from "./assets/components/api_call/api_call";

function App() {
	const result = fetchData();
	console.log(result);
	return <h1>Welcome to Eco Leap</h1>;
}

export default App;
