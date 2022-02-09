import React, { useState } from "react";
import padSeconds from "../padSeconds";

const SecondsCounter = () => {
	const [seconds, setSeconds] = useState(1);

	return (
		<div>
			<i class="bi bi-clock"></i>
			{padSeconds(seconds)}
		</div>
	);
};

export default SecondsCounter;
