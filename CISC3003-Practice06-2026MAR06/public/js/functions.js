function calculateTotal(quantity, price) {
	return quantity * price;
};

function outputCartRow(file, title, quantity, price, total) {
	const table = document.getElementById("cart-table");
	const row = document.createElement("tr");

	row.innerHTML = `
	  <td><img src="images/${file}"></td>
	  <td>${title}</td>
	  <td>${quantity}</td>
	  <td>$${price.toFixed(2)}</td>
	  <td>$${calculateTotal(quantity, price).toFixed(2)}</td>
	`;
	
	table.appendChild(row);
};

function calculateSubtotal(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal += item.quantity * item.price;
  }
  return subtotal;
}

function calculateTax(subtotal) {
  return subtotal * 0.10;
}

function calculateShipping(subtotal) {
  return subtotal > 1000 ? 0 : 40;
}

function calculateGrandTotal(subtotal, tax, shipping) {
  return subtotal + tax + shipping;
}

function outputTotals(subtotal, tax, shipping, grandTotal) {
  const table = document.getElementById("cart-table");

  table.innerHTML += `
    <tr class="totals">
      <td colspan="4">Subtotal</td>
      <td>$${subtotal.toFixed(2)}</td>
    </tr>
    <tr class="totals">
      <td colspan="4">Tax</td>
      <td>$${tax.toFixed(2)}</td>
    </tr>
    <tr class="totals">
      <td colspan="4">Shipping</td>
      <td>$${shipping.toFixed(2)}</td>
    </tr>
    <tr class="totals focus">
      <td colspan="4">Grand Total</td>
      <td>$${grandTotal.toFixed(2)}</td>
    </tr>
  `;
}
