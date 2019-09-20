
const fatherDiv = document.getElementById("fatherDiv")

function makingDivs () {

    for(let i = 0; i< 16; i++) {
        let newDivs = document.createElement("div");
        newDivs.className = "gridDivs";

        fatherDiv.appendChild(newDivs)
  };
};

makingDivs()


const sixteenGrid =  document.getElementsByClassName("gridDivs")

function changingSixteenGrid(theWholeLine) {
    for(let i = 0; i<sixteenGrid.length; i++) {
       
        sixteenGrid[i].style.backgroundColor = "red";
        theWholeLine
    };
};

changingSixteenGrid(sixteenGrid[i].style.display("inline-block"))

// fatherDiv.style.

