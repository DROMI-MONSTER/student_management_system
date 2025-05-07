document.getElementById("item-submit").addEventListener("click", () => {

    const inputElement = document.getElementById("item-input");
    const inputValue = inputElement.value;

    if (inputValue.trim() === '') {
        inputElement.setAttribute("placeholder", "please enter something")
    }
    else {
        document.getElementById("i-task-enter").innerHTML += `
        <div class = "new-tasks">
            <div id = "checkbox-content">
                <input type="checkbox" id="checkbox" class="checkbox">
                <p>${inputValue}</p>
            </div>
            <img id="delete" src="trash-solid.svg" alt="delete">
        </div>
        `;
    }
    document.getElementById("item-input").value = ""
}
)

document.getElementById("i-task-enter").addEventListener("click", (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();       //  this is new thing i leaarned today , it deletes/kills the current childs parent wich have been selected 
    } 
})

if(document.getElementsByClassName("tasks").innerHTML !== ""){
    const checkbox = document.querySelectorAll(".tasks");
    checkbox.forEach(checkbox => {
        checkbox.addEventListener("change", (a) => {
            const container = a.target.parentElement;
            const paragraph = container.querySelector("p");
            if(a.target.checked){
                paragraph.style.textDecoration = "line-through";
            }
            else{
                paragraph.style.textDecoration = "none";
            }
        });
    })

}


