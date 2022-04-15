/**
 *  JavaScript代码编辑区域 >
 *      1. 要用JavaScript干嘛? > 点击到li导航部分 浏览器滚动条滚动到对应content部分? 滚动条滚动多少才会到对应的部分展示了 > 滚动滚动距离是多少? > 对应的content部分元素顶部与页面顶部之间距离
 *      2. 知道点击li是哪一个 > 对应的content部分区域
 *
 *       $('li') => 页面中所有li
 *       click() => 给所有li绑定一个点击事件 > 点击元素之后要做事
 * 情
 *       $(this) => 代表被点击的当前元素
 *       eq => 找到对应第几个item元素
 */
$('.nav_up li').click(function () {
    // 点击li之后要做的事情 $(this)
    var index = $(this).index(); // 获取被点击li的下标 第几个这个几数字
    var height = $('h2').eq(index).offset().top; // 获取点击 li 元素对于content区域与页面顶部之间距离
    // alert(height)
    $('html, body').animate({
        scrollTop: height + 'px'
    }) // 以动画的方式修改浏览器滚动高度 scrollTop
})
