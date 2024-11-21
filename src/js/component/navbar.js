import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<div className="container">
		<nav className="navbar justify-content-end ">
			
			<div className="text-end">
				<Link to="/addContact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
				<Link to="/">
					<button className="btn btn-warning ms-4">Slug</button>
				</Link>

			</div>
		</nav>
		</div>
	);
};

export default Navbar;
