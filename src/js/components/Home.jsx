import Navbar from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Carta } from "./Carta";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar></Navbar>
		<Jumbotron></Jumbotron>
		<Carta></Carta>
		</>

	);
};

export default Home;