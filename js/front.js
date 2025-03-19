
// 作品的遍历

const zpimgs =[
    {url:'../img/大角鹿/大角鹿门面图片.jpg',title:'大角鹿',href:'../html/work1.html'},
    {url:'../img/鑫达/鑫达门面图片.jpg',title:'鑫达广东固昌全铝扶手',href:'../html/work2.html'},
    {url:'../img/博雨鑫/博雨鑫门店图片.jpg',title:'博雨鑫系统门窗企业',href:'../html/work3.html'},
    {url:'../img/鸿艺全屋定制/门面图片.jpg',title:'商洛鸿艺全屋定制厂',href:'../html/work4.html'},
    {url:'../img/彩艺建材/彩艺门面图.jpg',title:'彩艺建材',href:'../html/work5.html'},
    {url:'../img/鑫旺门窗加工/门面图片.jpg',title:'鑫旺门窗加工',href:'../html/work6.html'},
    {url:'../img/工厂店/工厂店门面图.jpg',title:'工厂店.朗伟浴室',href:'../html/work7.html'},
    {url:'../img/鸿达扶手/鸿达门面图.jpg',title:'鸿达不锈钢全铝扶手',href:'../html/work8.html'},
    {url:'../img/科顺防水/科顺门面.jpg',title:'科顺防水',href:'../html/work9.html'},
    {url:'../img/恒延门窗/恒延门窗门面图.jpg',title:'恒延门窗',href:'../html/work10.html'},
    {url:'../img/恒源玻璃/恒源门面.jpg',title:'恒源玻璃中空厂',href:'../html/work11.html'},
    {url:'../img/宝隆扶手/宝隆门面图片.jpg',title:'宝隆不锈钢',href:'../html/work12.html'},
]
let arr = ''
// 获取作品介绍
zpimgs.forEach(item =>{
    console.log(item);   
    arr+=`
        <li>
            <a href="${item.href}">
                    <img src="${item.url}" alt="">
                    <p>${item.title}</p>
            </a>
        </li>

    `
})

document.querySelector('.mlb-zp ul').innerHTML = arr
