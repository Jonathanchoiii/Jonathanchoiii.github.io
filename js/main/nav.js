var main = document.getElementById("main");
main.style.display = "none";
var masthead = document.getElementById("masthead");
masthead.style.display = "block";

var contents = document.getElementsByClassName("content-item");

for (let index = 0; index < contents.length; index++) {
  var element = contents[index];
  element.style.display = "none";
}

var routers = {
  "nav1": "history",
  "nav2": "nowadays",
  "nav3": "why",
  "nav4": "future",
  "tail": "end",
  "main-nav1": "history",
  "main-nav2": "nowadays",
  "main-nav3": "why",
  "main-nav4": "future"
}

function hideAllContent() {
  for (const nav in routers) {
    if (routers.hasOwnProperty(nav)) {
      const element = document.getElementById(routers[nav]);
      element.style.display = "none";
    }
  }
}

function unactiveAllNav() {
  var activeNavs = document.getElementsByClassName("nav-item--active");
  while (activeNavs.length > 0) {
    for (let index = 0; index < activeNavs.length; index++) {
      const element = activeNavs[index];
      element.classList.remove("nav-item--active");
    }
    activeNavs = document.getElementsByClassName("nav-item--active");
  }
}

for (var nav in routers) {
  if (routers.hasOwnProperty(nav)) {
    var element = document.getElementById(nav);
    element.addEventListener("click", (function (elementId) {
      return function () {
        var main = document.getElementById("main");
        main.style.display = "block";
        var masthead = document.getElementById("masthead");
        masthead.style.display = "none";
        hideAllContent();
        var el = document.getElementById(elementId);
        el.style.display = "block";
        unactiveAllNav();
        for (const nav in routers) {
          if (routers.hasOwnProperty(nav)) {
            const id = routers[nav];
            if (id == elementId) {
              var activeItem = document.getElementById(nav);
              activeItem.classList.add("nav-item--active");
            }
          }
        }
        document.documentElement.scrollTop = 0;
      }
    })(routers[nav]))
  }
}

var index = document.getElementById("index");
index.addEventListener("click", function () {
  var main = document.getElementById("main");
  main.style.display = "none";
  var masthead = document.getElementById("masthead");
  masthead.style.display = "block";
})
