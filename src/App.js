import { useEffect, useState } from 'react';

function App() {
	const [animals, setAnimals] = useState([]);

	const search = async (q) => {
		fetch(`http://localhost:8080?q=${q}`);
		const response = await fetch(`http://localhost:8080?q=${q}`);
		const data = await response.json();
		setAnimals(data);
	};

	return (
		<main>
			<h1>Animal Farm</h1>

			<input
				type="text"
				placeholder="Search for animals"
				onChange={(e) => {
					const query = e.target.value;
					search(query);
				}}
			/>

			<ul>
				{animals.map((animal) => (
					<Animal key={animal.id} {...animal} />
				))}

				{animals.length === 0 && <li>No animals found</li>}
			</ul>
		</main>
	);
}
function Animal({ type, name, age }) {
	return (
		<li>
			{name} is a {age} year old {type}
		</li>
	);
}

export default App;
