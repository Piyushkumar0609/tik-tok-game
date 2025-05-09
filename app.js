let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("reset");
let mgscontent = document.querySelector(".mgs1");
let mgs = document.querySelector("#mgs")
// let newgame = document.querySelector("#newgame")
let tune = true;
const arr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [6, 4, 2],
    [3, 4, 5],
];

const enablboxses = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };

};

const resetgmae = () => {
    tune = true;
    mgscontent.classList.add("hide")
    enablboxses();


};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (tune) {
            box.innerText = "o";
            tune = false
        }
        else {
            box.innerText = "x";
            tune = true;
        };
        box.disabled = true;
        checkwinner();
    });

});


const disablboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};

const showwinner = (winner) => {
    mgs.innerText = `congratulations winner is ${winner}`;
    mgscontent.classList.remove("hide");
    disablboxes();

}
const checkwinner = () => {
    for (const pettan of arr) {

        let pos1val = boxes[pettan[0]].innerText;
        let pos2val = boxes[pettan[1]].innerText;
        let pos3val = boxes[pettan[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);

            };
       };     
    };
};

newgame.addEventListener("click", () => {
    resetgmae();
});
resetgame.addEventListener("click", () => {
    resetgmae();
});