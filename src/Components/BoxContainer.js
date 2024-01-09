import React from "react";
import "./BoxContainer.css";

const BoxContainer = (props) => {
	return (
		<div className="bc-main">
			<p className="bc-title">{props.title}</p>
			<p className="bc-value">{props.value}</p>
		</div>
	);
};

export default BoxContainer;
