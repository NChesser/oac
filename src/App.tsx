import './App.css';

// Routing
import { Routes, Route, Link } from "react-router-dom";

// Components
import Home from './pages/Home';


function App() {
	return (
		<div className="App">
			{/* <header>
				<div>
					<h1>
						OAC
					</h1>
				</div>
				<nav>
					<ul>
						<li>
							<Link to='/start'>Start</Link>
						</li>
						<li>
							<Link to='/categories'>Categories</Link>
						</li>
						<li>
							<Link to='/languages'>Languages</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/challenges' element={<Home />} />
					<Route path='/completed-challenges' element={<p>Completed Challenges</p>} />
				</Routes>
			</main> */}
			<main>
				<Home />
			</main>
		</div>
	);
}

export default App;
