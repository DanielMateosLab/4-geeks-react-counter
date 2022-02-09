/** Returns a 6 length string array containing the seconds padded using zeroes */
function padSeconds(seconds) {
	return seconds.toString().padStart(6, "0").split("");
}

export default padSeconds;
