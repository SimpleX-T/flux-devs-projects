export function formatNumber(num) {
	if (num >= 1000) {
		// Calculate the number in thousands
		const formattedNumber = num / 1000;
		// Format the number with one decimal place
		const roundedNumber = formattedNumber.toFixed(1);
		// Remove the trailing .0 if it's zero
		return roundedNumber.endsWith(".0")
			? (formattedNumber | 0) + "K"
			: roundedNumber + "K";
	} else {
		// Return the number as is if it's less than 1000
		return num.toString();
	}
}
