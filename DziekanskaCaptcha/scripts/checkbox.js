const checkbox = document.querySelector(".checkbox-container");


const checkboxClicked = e => {
    checkbox.classList.add("clicking");
    setTimeout(()=> {
        checkbox.classList.remove("clicking");
    }, 310);
    parent.postMessage(
        "captchaRequested", 
        address
    );
}

checkbox.addEventListener("click", checkboxClicked);

window.addEventListener("message", e => { 

    const checkbox = document.querySelector(".checkbox");
    if(e.data == "accepted"){
        checkbox.style.backgroundImage = "url(data:image/png;base64,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)";
    }
    else{
        checkbox.classList.add("denied");
        setTimeout(()=>{
            checkbox.classList.remove("denied");
        }, 5000);
    }
 }, false);

const address = location.search.replace("?", "").split("&").find(e => e.startsWith("href")).replace("href=", "");

