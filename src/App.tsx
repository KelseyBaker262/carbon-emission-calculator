import "./App.scss";
import fetchData from "./assets/components/api_call/api_call";

function App() {
	function makeCall() {
	const result = fetchData("car")
	console.log(result)
		}

	return (
		<>
		<h1>Welcome to Eco Leap</h1>
		<button type="button" onClick={makeCall}>Click Me</button>
		</>
	);
}

export default App;
