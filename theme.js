let btn_icon = document.getElementById("icon");
let theme = document.getElementById("dark_theme")
let light_mode_btn = document.getElementById("light_mode")
let dark_mode_btn = document.getElementById("dark_mode")

let flag = 1;
function change_theme() {
    if (flag == 0) {
        theme.style.backgroundColor = "aquamarine ";
        light_mode_btn.style.display = "none";
        dark_mode_btn.style.display = "block";
        flag++;
    }
    else if (flag == 1) {
        theme.style.backgroundColor = "rgb(48, 66, 66)";
        light_mode_btn.style.display = "block";
        dark_mode_btn.style.display = "none";
        flag--;
    }
}