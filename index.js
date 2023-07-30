
console.log("Script loaded successfully!");
//alert("Welcome to my Portfolio Website!");

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function validationForm(){
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
        alert("Please fill in all the required fields.");
        document.getElementById("error").innerHTML = "Error text";
        return false;
    }
    return true;
}