function addChild(){
    let name = document.getElementById("childName").value;
    let age = document.getElementById("childAge").value;

    if(name === "" || age === ""){
        alert("Don Allah cika dukkan bayanai!");
        return;
    }

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <strong>👤 Suna:</strong> ${name} <br>
        <strong>🎂 Shekaru:</strong> ${age} <br>
        <strong>📍 Wuri:</strong> Ba a sa GPS ba (demo)
    `;

    document.getElementById("list").appendChild(card);

    document.getElementById("childName").value = "";
    document.getElementById("childAge").value = "";
                                                }
