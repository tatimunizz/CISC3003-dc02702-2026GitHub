
window.onload = function() {
	for(let item of cartItems) {
		outputCartRow(item.file, item.title, item.quantity, item.price);
	}
	
	let subtotal = calculateSubtotal(cartItems);
	let tax = calculateTax(subtotal);
	let shipping = calculateShipping(subtotal);
	let grandTotal = calculateGrandTotal(subtotal, tax, shipping);

	outputTotals(subtotal, tax, shipping, grandTotal);

};

