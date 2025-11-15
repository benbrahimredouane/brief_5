
document.getElementById("addcollection").addEventListener("click", function (e) {

    e.preventDefault();

    const collectionname = document.getElementById("collection").value;
    const selectElement = document.getElementById("options");

    if (collectionname) {

        
        let collections = JSON.parse(localStorage.getItem("collections")) || [];

        
        if (!collections.includes(collectionname)) {
            collections.push(collectionname);
            localStorage.setItem("collections", JSON.stringify(collections));
        }

        
        const newOption = document.createElement("option");
        newOption.text = collectionname;
        newOption.value = collectionname;
        selectElement.add(newOption);

        alert("you add " + collectionname + " collection avec succes!!");
        document.getElementById("collection").value = "";

    } else {
        alert("pls fill the collection feild");
    }
});



function loadCollections() {
    const selectElement = document.getElementById("options");
    const collections = JSON.parse(localStorage.getItem("collections")) || [];

    collections.forEach(col => {
        const option = document.createElement("option");
        option.text = col;
        option.value = col;
        selectElement.add(option);
    });
}




document.getElementById("addcard").addEventListener("click", function (e) {
    e.preventDefault();

    const collection = document.getElementById("options").value;
    const question = document.getElementById("Question").value;
    const reponse = document.getElementById("Reponse").value;

    if (!collection || !question || !reponse) {
        alert("Please fill all fields!");
        return;
    }

    
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    
    const newCard = {
        collection: collection,
        question: question,
        reponse: reponse
    };

    
    cards.push(newCard);


    localStorage.setItem("cards", JSON.stringify(cards));

    alert("Card added successfully!");

    
    displayCard(newCard);

    
    document.getElementById("Question").value = "";
    document.getElementById("Reponse").value = "";
});



function displayCard(card) {
    const container = document.getElementById("card");

    const div = document.createElement("div");
    div.className = "flashcard";

    div.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                <h3 class="font-bold">${card.collection}</h3>
                <p><strong>Q:</strong> ${card.question}</p>
            </div>

            <div class="flashcard-back">
                <p ><strong>Answer:</strong></p>
                <p>${card.reponse}</p>
            </div>
        </div>
    `;

    // Flip effect on click
    div.addEventListener("click", () => {
        div.classList.toggle("flip");
    });

    container.appendChild(div);
}





function loadCards() {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.forEach(card => displayCard(card));
}




window.onload = function () {
    loadCollections();
    loadCards();
};
