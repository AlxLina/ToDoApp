const addButton = document.querySelector(".add_plan");
const inputText = document.querySelector(".input_plan");
const createdPlan = document.querySelector(".created_plans");


//events 
addButton.addEventListener("click", () => {
    AddDelPlan();
});
inputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        AddDelPlan();
    };
});


//func add and delete plan to/from your list
function AddDelPlan(){
    const plan = document.createElement("div");
    plan.classList.add("new_plan");
    plan.innerHTML = `
    <p class="text_plan">${inputText.value}</p>`;

    const text = document.createElement("p");
    text.classList.add("text_plan");

    const box = document.createElement("div");
    box.classList.add("box_action");

    const check = document.createElement("input");
    check.classList.add("done");
    check.type = "checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = `<img src="../img/trash.png" alt="trash">`;

    box.appendChild(check);
    box.appendChild(deleteButton);
    plan.appendChild(box);
    createdPlan.appendChild(plan);

    inputText.value = "";

    deleteButton.addEventListener("click", () =>{
        plan.remove();
        // SaveProgress();
    });

    check.addEventListener("click", () =>{
        // SaveProgress();
    });

    // SaveProgress();
};

// //save progress in storage
// function SaveProgress() {
//     localStorage.setItem("data", createdPlan.${inputText.value});
// };
// function ShowPlan(){
//     createdPlan.innerHTML = localStorage.getItem("data");
// };

// //for deleting items after upload page (but only first)
// ShowPlan();




