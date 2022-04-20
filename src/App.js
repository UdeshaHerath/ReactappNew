// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		date1: "",
		predicted1: 0,
		actual1: 0,
		difference1: 0,
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("http://10.15.3.90:5000/power").then((res) =>
			res.json().then((data) => {
				console.log('Res', res)

				// Setting a data from api
				setdata({
					date1: data.time,
					predicted1: data.predicted,
					actual1: data.actual,
					difference1: data.difference,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				{/* Calling a data from setdata for showing */}
				<p>{data.name1}</p>
				<p>{data.predicted1}</p>
				<p>{data.actual1}</p>
				<p>{data.difference1}</p>

			</header>
		</div>
	);
}

export default App;
