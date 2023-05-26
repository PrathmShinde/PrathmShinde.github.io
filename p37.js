
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


if(!localStorage.getItem("name")) {
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to the coding world,${storedName}`;
}

    function setUserName() {
        const myName = prompt("Please enter your name..");
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to the coding world, ${myName}`;
    }
    myButton.onclick = () => {
        setUserName();
    };



