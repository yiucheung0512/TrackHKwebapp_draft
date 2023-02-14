/////////////////////////////////////////////////////////////////////////////
//////////////slidenav///////////
if (mobile == true) {
  //console.log("off");
  var loader = document.getElementById("loader");
  var loadText = document.getElementById("load");
  var icon = document.getElementById("icon");

  loadText.innerText = "";
  icon.style = "none";
  icon.src = "TRACK(2).png";
  icon.style.filter = "opacity(0.8) drop-shadow(2px 4px 6px black)";
  icon.style.width = "75%";
  icon.style.position = "absolute";
  icon.style.top = "40%";
  icon.style.left = "calc((100% - 75%)/2)";
  document.body.style.background = "#ffffff";
}

var slideIndex = 1;
showDivs(slideIndex);

function divcon(n) {
  showDivs2((slideIndex += n));
  btncon();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

if (mobile == false) {
  document.addEventListener("keypress", function (event) {
    var key = event.keyCode;
    if (key == 116 || key == 84) {
      slideIndex = 2;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "t",
        })
      );
      lowernav(0);
    } else if (key == 114 || key == 82) {
      slideIndex = 3;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "r",
        })
      );
      lowernav(2);
    } else if (key == 97 || key == 65) {
      slideIndex = 4;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "a",
        })
      );
      lowernav(2);
    } else if (key == 99 || key == 67) {
      slideIndex = 5;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "c",
        })
      );
      lowernav(2);
    } else if (key == 107 || key == 75) {
      slideIndex = 6;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "k",
        })
      );
      lowernav(1);
    }
    showDivs(slideIndex);
    //alert(key);
  });
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  if (mobile == false) {
    var list = ["t", "r", "a", "c", "k"];
    var list2 = ["84", "82", "65", "67", "75"];
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: list[slideIndex - 2],
        keyCode: list2[slideIndex - 2],
        which: list2[slideIndex - 2],
        type: "keydown",
      })
    );
    //alert(list[slideIndex - 2] + list2[slideIndex - 2]);
  }
}

function btncon() {
  console.log(slideIndex);

  if (slideIndex < 3) {
    lowernav(0);
  } else if (slideIndex > 5) {
    lowernav(1);
  } else {
    lowernav(2);
  }
}

function lowernav(x) {
  if (x === 0) {
    document.getElementById("lbt").style.display = "none";
    document.getElementById("sign").style.display = "none";
  }
  if (x === 1) {
    document.getElementById("rbt").style.display = "none";
    document.getElementById("sign").style.display = "block";
  }
  if (x === 2) {
    document.getElementById("lbt").style.display = "block";
    document.getElementById("rbt").style.display = "block";
    document.getElementById("sign").style.display = "none";
  }
}

function mencon(n) {
  slideIndex = n;
  showDivs2(slideIndex);
  btncon();
}

/////////////////////////////////////////////////////////////////////////////
//////////////watermark removal///////////
const removeWatermark = () => {
  const ids = [];
  const iframes = document.body.querySelectorAll("iframe");
  for (const iframe of iframes) {
    if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
  }
  for (const id of ids) {
    const node = document.createElement("div");
    node.style.setProperty("display", "none", "important");
    node.id = id;
    document.getElementById(id).remove();
    document.body.appendChild(node);
  }
};
setTimeout(removeWatermark, 500);
/*@codesandbox devs, sorry for removing your anti-phising watermark. Yet the "Open Sandbox" button floats right ontop of my UI, I have no other choice. Sorry UwU*/

/////////////////////////////////////////////////////////////////////////////
//////////////Blur loading//////////
if (mobile == false) {
  var canvas = document.getElementById("canvas3d");
  var loader = document.getElementById("loader");
  var loadText = document.getElementById("load");
  var mesdiv = document.getElementById("mesdiv");
  var mescon = document.getElementById("mescon");
  let load = 0;
  let int = setInterval(blurring, 100);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  function blurring() {
    load++;
    if (load > 99) {
      clearInterval(int);
      message();
    }
    loadText.innerText = `${load}%`;
    loader.style.opacity = scale(load, 0, 100, 1, 0);
    canvas.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }

  function message() {
    loader.style.display = "none";
    mesdiv.style.display = "block";
    mescon.style.filter = "opacity(0.8) drop-shadow(2px 4px 6px black)";
  }

  /*window.onresize = function () {
		mesdiv.style.display = "none";
	};*/
}
