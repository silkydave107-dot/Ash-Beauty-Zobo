function sendToWhatsapp() {
  
  const phoneNumber = "2349044340511";  
  const zoboInput = document.getElementById("zoboQty");
  const tigernutInput = document.getElementById("tigernutQty");
  const orderType = document.getElementById("orderType");
  const custName = document.getElementById("custName");
  const custAddress = document.getElementById("custAddress");
  const zoboQty = Number(zoboInput);
  const tigernutQty = Number(tigernutInput);

//////////////////////////////////////////////

  if (zoboQty === 0 && tigernutQty === 0) {
    alert("Please select at least 1 drink.");
    return; // Stop the function here
  }

  if (custName === "" || custAddress === "") {
    alert("Please fill in your Name and Address.");
    return; // Stop the function here
  } 
  
  if (zoboQty > 0) {
      textMessage = textMessage + "- Zobo Drink: " + zoboQty + "\n";
    }
    
    if (tigernutQty > 0) {
        textMessage = textMessage + "- Tigernut Drink: " + tigernutQty + "\n";
    }
    
    let textMessage = "Hello Okik Sips! I would like to place an order:\n\n";
    
  textMessage = textMessage + "\nType: " + orderType;
  textMessage = textMessage + "\nName: " + custName;
  textMessage = textMessage + "\nAddress: " + custAddress;

  
  const encodedMessage = encodeURIComponent(textMessage);

  
  const whatsappUrl =
    "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

  
  window.open(whatsappUrl, "_blank");
}
