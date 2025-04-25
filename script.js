// nav style start

    let navBar = 1;

    function navpar(){
        if(navBar==1){
            document.querySelector('.resIcon .xmarNav').style.display = "flex";
            document.querySelector('.resIcon .navBar').style.display = "none";    
            document.querySelector('.responsiveNav').style.left="0px";
            navBar = 2;
        }
        else{
            document.querySelector('.resIcon .xmarNav').style.display = "none";
            document.querySelector('.resIcon .navBar').style.display = "flex";    
            document.querySelector('.responsiveNav').style.left="-100%";
            navBar=1;
        }

    }

// nav style clouses 

let imgScroll1 =100;
function leftscroll1() {
    if (imgScroll1 < 400) {
        document.querySelector('.scrollImg-1').style.left = '-'+imgScroll1+'%';
        imgScroll1 =  imgScroll1+100;
    }
}

function rightscroll1(){
    if (imgScroll1 > 0) {
        imgScroll1 = imgScroll1 - 100;
        document.querySelector('.scrollImg-1').style.left = '-'+imgScroll1+'%';
    }
}



let imgScroll2 =100;
function leftscroll2() {
    if (imgScroll2 < 400) {
        document.querySelector('.scrollImg-2').style.left = '-'+imgScroll2+'%';
        imgScroll2 =  imgScroll2+100;
    }
}

function rightscroll2(){
    if (imgScroll2 > 0) {
        imgScroll2 = imgScroll2 - 100;
        document.querySelector('.scrollImg-2').style.left = '-'+imgScroll2+'%';
    }
}


let imgScroll3 =100;
function leftscroll3() {
    if (imgScroll3 < 400) {
        document.querySelector('.scrollImg-3').style.left = '-'+imgScroll3+'%';
        imgScroll3 =  imgScroll3+100;
    }
}

function rightscroll3(){
    if (imgScroll3 > 0) {
        imgScroll3 = imgScroll3 - 100;
        document.querySelector('.scrollImg-3').style.left = '-'+imgScroll1+'%';
    }
}


let imgScroll4 =100;
function leftscroll4() {
    if (imgScroll4 < 400) {
        document.querySelector('.scrollImg-4').style.left = '-'+imgScroll4+'%';
        imgScroll4 =  imgScroll4+100;
    }
}

function rightscroll4(){
    if (imgScroll4 > 0) {
        imgScroll4 = imgScroll4 - 100;
        document.querySelector('.scrollImg-4').style.left = '-'+imgScroll4+'%';
    }
}


let imgScroll5 =100;
function leftscroll5() {
    if (imgScroll5 < 400) {
        document.querySelector('.scrollImg-5').style.left = '-'+imgScroll5+'%';
        imgScroll5 =  imgScroll5+100;
    }
}

function rightscroll5(){
    if (imgScroll5 > 0) {
        imgScroll5 = imgScroll5 - 100;
        document.querySelector('.scrollImg-5').style.left = '-'+imgScroll5+'%';
    }
}


let imgScroll6 =100;
function leftscroll6() {
    if (imgScroll6 < 400) {
        document.querySelector('.scrollImg-6').style.left = '-'+imgScroll6+'%';
        imgScroll6 =  imgScroll6+100;
    }
}

function rightscroll6(){
    if (imgScroll6 > 0) {
        imgScroll6 = imgScroll6 - 100;
        document.querySelector('.scrollImg-6').style.left = '-'+imgScroll6+'%';
    }
}


// Listing page clouses


// popular page start 

let Lpopular = 25;
function popularLeft(){
    if(Lpopular<100){
        document.querySelector('.LpopularScroll').style.left = "-"+Lpopular+"%";
        Lpopular = Lpopular+25;
    }
}

function popularRight(){
    if(Lpopular>0){
        Lpopular = Lpopular-25;
        document.querySelector('.LpopularScroll').style.left = "-"+Lpopular+"%";
    }
}

// popular page clouses

// Logos page start

let logoScroll = 100;

function LogoLeft(){
    if(logoScroll<400){
        document.querySelector('.LogoScroll').style.left = "-"+logoScroll+"%";
        logoScroll = logoScroll+100;    
    }
}

function LogoRight(){
    if(logoScroll>0){
        logoScroll = logoScroll-100;
        document.querySelector('.LogoScroll').style.left = "-"+logoScroll+"%";    
    }
}




function pulli1(){
    document.querySelector('.LogoScroll').style.left = 0+"%"
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-1').style.backgroundColor = "blue";

}


function pulli2(){
    document.querySelector('.LogoScroll').style.left = -25+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "blue";
}

function pulli3(){
    document.querySelector('.LogoScroll').style.left = -50+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "blue";

}

function pulli4(){
    document.querySelector('.LogoScroll').style.left = -75+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "blue";
}

// Logos page clouses

function make(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "flex";
    document.querySelector('.LogoArrow').style.display = "flex";
    document.querySelector('.pulliTag').style.display = "flex";
    document.querySelector('.makeBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";


}


function HLpopular(){
    document.querySelector('.Lpopular').style.display = "flex";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";

}


function HLprice(){

    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "grid";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";

}


function HLBody(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "grid";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";
}

function HLSeats(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "grid";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 2px solid blue; color: blue;";

}




