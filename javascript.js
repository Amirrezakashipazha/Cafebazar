function burgermenu() {
  var x = document.getElementById("burger-item");
  var y = document.getElementById("i-burger");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML = "menu";
  } else {
    x.style.display = "block";
    y.innerHTML = "close";
  }
}

function funright1() {
  var z = document.getElementById("barname-slider1");
  z.scrollBy(900, 0, "smoth");
  document.getElementById("btn-right1").style.display = "none";
  document.getElementById("btn-left1").style.display = "inline";
}

function funleft1() {
  var z = document.getElementById("barname-slider1");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left1").style.display = "none";
  document.getElementById("btn-right1").style.display = "inline";
}

function funright2() {
  var z = document.getElementById("barname-slider2");
  z.scrollBy(900, 0);
  document.getElementById("btn-right2").style.display = "none";
  document.getElementById("btn-left2").style.display = "inline";
}

function funleft2() {
  var z = document.getElementById("barname-slider2");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left2").style.display = "none";
  document.getElementById("btn-right2").style.display = "inline";
}

function funright3() {
  var z = document.getElementById("barname-slider3");
  z.scrollBy(900, 0);
  document.getElementById("btn-right3").style.display = "none";
  document.getElementById("btn-left3").style.display = "inline";
}

function funleft3() {
  var z = document.getElementById("barname-slider3");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left3").style.display = "none";
  document.getElementById("btn-right3").style.display = "inline";
}

function funright4() {
  var z = document.getElementById("barname-slider4");
  z.scrollBy(900, 0);
  document.getElementById("btn-right4").style.display = "none";
  document.getElementById("btn-left4").style.display = "inline";
}

function funleft4() {
  var z = document.getElementById("barname-slider4");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left4").style.display = "none";
  document.getElementById("btn-right4").style.display = "inline";
}

function funright5() {
  var z = document.getElementById("barname-slider5");
  z.scrollBy(900, 0);
  document.getElementById("btn-right5").style.display = "none";
  document.getElementById("btn-left5").style.display = "inline";
}

function funleft5() {
  var z = document.getElementById("barname-slider5");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left5").style.display = "none";
  document.getElementById("btn-right5").style.display = "inline";
}

function funright6() {
  var z = document.getElementById("barname-slider6");
  z.scrollBy(900, 0);
  document.getElementById("btn-right6").style.display = "none";
  document.getElementById("btn-left6").style.display = "inline";
}

function funleft6() {
  var z = document.getElementById("barname-slider6");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left6").style.display = "none";
  document.getElementById("btn-right6").style.display = "inline";
}

function funright7() {
  var z = document.getElementById("barname-slider7");
  z.scrollBy(900, 0);
  document.getElementById("btn-right7").style.display = "none";
  document.getElementById("btn-left7").style.display = "inline";
}

function funleft7() {
  var z = document.getElementById("barname-slider7");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left7").style.display = "none";
  document.getElementById("btn-right7").style.display = "inline";
}

function funright8() {
  var z = document.getElementById("barname-slider8");
  z.scrollBy(800, 0);
  // document.getElementById("btn-right8").style.display="none";
  // document.getElementById("btn-left8").style.display="inline";
}

function funleft8() {
  var z = document.getElementById("barname-slider8");
  z.scrollBy(-800, 0);
  // document.getElementById("btn-left8").style.display="none";
  // document.getElementById("btn-right8").style.display="inline";
}

function funright9() {
  var z = document.getElementById("barname-slider9");
  z.scrollBy(900, 0);
  document.getElementById("btn-right9").style.display = "none";
  document.getElementById("btn-left9").style.display = "inline";
}

function funleft9() {
  var z = document.getElementById("barname-slider9");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left9").style.display = "none";
  document.getElementById("btn-right9").style.display = "inline";
}

function funright10() {
  var z = document.getElementById("barname-slider10");
  z.scrollBy(900, 0);
  document.getElementById("btn-right10").style.display = "none";
  document.getElementById("btn-left10").style.display = "inline";
}

function funleft10() {
  var z = document.getElementById("barname-slider10");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left10").style.display = "none";
  document.getElementById("btn-right10").style.display = "inline";
}

function funright11() {
  var z = document.getElementById("barname-slider11");
  z.scrollBy(900, 0);
  document.getElementById("btn-right11").style.display = "none";
  document.getElementById("btn-left11").style.display = "inline";
}

function funleft11() {
  var z = document.getElementById("barname-slider11");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left11").style.display = "none";
  document.getElementById("btn-right11").style.display = "inline";
}

function funright12() {
  var z = document.getElementById("barname-slider12");
  z.scrollBy(900, 0);
  document.getElementById("btn-right12").style.display = "none";
  document.getElementById("btn-left12").style.display = "inline";
}

function funleft12() {
  var z = document.getElementById("barname-slider12");
  z.scrollBy(-900, 0);
  document.getElementById("btn-left12").style.display = "none";
  document.getElementById("btn-right12").style.display = "inline";
}

function funshowmore() {
  var s15 = document.getElementById("sec-15");
  var i = document.getElementById("i-more");

  if (s15.style.height === "270px") {
    s15.style.height = "100%";
    i.className = "fa fa-angle-up";
    s15.style.cursor = "auto";
  } else {
    s15.style.height = "270px";
    i.className = "fa fa-angle-down";
    s15.style.cursor = "pointer";
  }
}
