import "./App.scss";
import fetchData from "./assets/components/api_call/api_call";
import NavBar from "./assets/components/navbar/NavBar";

function App() {
	function makeCall() {
		const result = fetchData("car");
		console.log(result);
	}

	return (
		<main className="wrapper">
			< NavBar />
			<section className="landingPage">
			<h1>Welcome to Eco Leap</h1>
			<button type="button" onClick={makeCall}>
				API Call
			</button>
			</section>
		</main>
	);
}

export default App;
