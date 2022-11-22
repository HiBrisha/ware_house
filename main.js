let sidebar = document.querySelector(".sidebar");
let openBtn = document.querySelector("#btn");


openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        document.getElementById("btn").src = "./Image/menubar_close.png";
    } else {
        document.getElementById("btn").src = "./Image/menu_bar_icon.png";
        //openBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        //openBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}
