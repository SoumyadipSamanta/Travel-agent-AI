function getPlan() {
    const query = document.getElementById("query").value;
    fetch("/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query })
    })
    .then(res => res.json())
    .then(data => {
        const result = `
            <h3>Destination: ${data.destination}</h3>
            <p><b>Itinerary:</b> ${data.itinerary.join("<br>")}</p>
            <p><b>Weather:</b> ${data.weather}</p>
            <p><b>Hotel:</b> ${data.hotel}</p>
            <p><b>Transport:</b> ${data.transport}</p>
            <p><b>Budget:</b> ${data.budget}</p>
        `;
        document.getElementById("result").innerHTML = result;
    });
}
