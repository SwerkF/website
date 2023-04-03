AOS.init();

var name = ["O", "l", "i", "w", "e", "r", "-", "S", "k", "w", "e", "r", "e", "s"];
let idx = 0;
let title;
document.title = "";
setInterval(() => {
  if(idx > 13) {
    idx = 1;
    document.title = "O";
  } else {
    title = document.title + name[idx];
    console.log(name[idx])
    document.title = title;
    idx++;
  }
}, 500)