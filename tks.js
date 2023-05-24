const urlParams = new URLSearchParams(window.location.search);

document.getElementById("rateValue").innerHTML = `You selected ${urlParams.get("rating")} out of 5`
