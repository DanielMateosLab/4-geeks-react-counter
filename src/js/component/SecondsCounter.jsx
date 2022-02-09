import React, { useEffect, useState } from "react";
import padSeconds from "../padSeconds";
import CounterChar from "./CounterChar.jsx";

const SecondsCounter = () => {
	const [seconds, setSeconds] = useState(0);

	const clockIcon = <i class="bi bi-clock"></i>;
	const paddedSeconds = padSeconds(seconds);
	const counterCharacters = [clockIcon, ...paddedSeconds];

	return (
		<div>
			{counterCharacters.map((char) => (
				<CounterChar> {char} </CounterChar>
			))}
		</div>
	);
};

export default SecondsCounter;
