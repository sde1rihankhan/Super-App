let categoryName = []

function selectCategory (moviName){
    if(categoryName.includes(moviName)){
        const findIndex = categoryName.findIndex((item)=>item===moviName)
        categoryName.splice(findIndex,1)
    }else{
        categoryName.push(moviName)
    }
    updateButton()
    console.log(categoryName);
    
}
function updateButton (){
    const buttonContainer = document.getElementById("buttonContainer")
    buttonContainer.innerText=""
    categoryName.forEach((item)=>{
    let button = document.createElement("button")
    button.classList.add("my-button");
    button.innerText = item + "\u00A0\u00A0\u00A0❌\u00A0\u00A0"
    buttonContainer.appendChild(button);
    button.onclick = () => {
        if(categoryName.includes(item)){
            const findIndex = categoryName.findIndex((items)=>item === items)
            categoryName.splice(findIndex,1)
            updateButton()
        }
        }
    })
}
function newButton(){
    window.location.href="http://127.0.0.1:5502/superApp/vinay/index.html"
}