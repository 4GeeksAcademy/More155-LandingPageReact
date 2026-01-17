import React from "react";
import MyNavbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
		<MyNavbar />
		<div className="container">
	    <Jumbotron />
		<CardContainer />
		</div>
        <Footer />
		</>
	);
};

export default Home;