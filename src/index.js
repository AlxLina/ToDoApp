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

    const yourinput = inputText.value;

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
        DeleteProgress(yourinput);
    });

    SaveProgress(yourinput);
};

// func save progress in storage
function SaveProgress(value){
    if (localStorage.getItem('key')){
    let tasks = localStorage.getItem('key');
    const arr = tasks.split(',');
    arr.push(value);
    console.log(arr);   
    localStorage.setItem('key', arr);
    } else {
        let arr1 = [];
        arr1.push(value);
        localStorage.setItem('key', arr1);
    };
};

// func delete tasks from storage
function DeleteProgress(value){
    let tasks = localStorage.getItem('key');
    const arr = tasks.split(',');
    for (i = 0; i < arr.length; i++){
        if (arr[i] === value){
            arr.splice(i, 1);
            break
        };
    };
    localStorage.setItem('key', arr);
};

// func show tasks from storage
function ShowPlan(){
    if (localStorage.getItem('key')){
        tasks = localStorage.getItem('key');
        const arr = tasks.split(',');
        for (i = 0; i < arr.length; i++){
            appendPlan(arr[i]);
        };
    };
};

// show tasks when reload page
ShowPlan();

//func create plan from localstorage
function appendPlan(value){
    const plan = document.createElement("div");
    plan.classList.add("new_plan");
    plan.innerHTML = `
    <p class="text_plan">${value}</p>`;

    const yourinput = inputText.value;

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
        DeleteProgress(value);
    });
};