import Navbar from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Carta } from "./Carta";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<div className="row">
				<Carta/>
				<Carta/>
				<Carta/>
				<Carta/>
			</div>
		</>

	);
};

export default Home;