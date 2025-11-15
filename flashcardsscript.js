document.getElementById("addcollection").addEventListener("click",function(e) {

    e.preventDefault()

    const collectionname = document.getElementById("collection").value;

   



    const selectElement = document.getElementById("options");

    if (collectionname) {

        const newOption = document.createElement("option");


 
let collections = JSON.parse(localStorage.getItem("collectionname")) || [];


collections.push(collectionname);


localStorage.setItem("collectionname", JSON.stringify(collections));

        newOption.text = collectionname;

        newOption.value = collectionname;

       console.log(collectionname);



        selectElement.add(newOption);

       



        alert("you add "+ collectionname +" collection avec succes!!");

        document.getElementById("collection").value="";

    }

    else

    {

        alert("pls fill the collection feild");

    }

       







   

});

window.addEventListener("load", function () {
    const saved = JSON.parse(localStorage.getItem("collectionname")) || [];
    const selectElement = document.getElementById("options");

    saved.forEach(col => {
        const option = document.createElement("option");
        option.text = col;
        option.value = col;
        selectElement.add(option);
    });
});
