let rotation_map = 1;

// 自动切换图片函数
function auto_img() {
    if (rotation_map === 7) {
        rotation_map = 0;
    }
    // 获取图片对象（通过class选择器的方式获取）
    let img = document.querySelector(".auto_img");
    // 输出
    img.style.background = "url(../img/img" + (++rotation_map) + ".jpg)";
    img.style.backgroundSize = "100% 100%";
}

// 设置 调用auto_img函数的 间隔（4000ms）
setInterval(auto_img, 4000);