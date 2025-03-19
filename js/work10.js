// 作品的遍历

const zpimgs =[
    {url:'../img/恒延门窗/成品展示11.jpg',title:'隔热先锋'},
    {url:'../img/恒延门窗/成品展示15.jpg',title:'坚固之盾'},
    {url:'../img/恒延门窗/成品展示13.jpg',title:'时尚锐器'},
    {url:'../img/恒延门窗/成品展示14.jpg',title:'安全堡垒'},
]
let arr = ''
// 获取作品介绍
zpimgs.forEach(item =>{
    console.log(item);

    arr+=`
        <li>
            <a href="">
                    <img src="${item.url}" alt="">
                    <p>${item.title}</p>
            </a>
        </li>

    `
})

document.querySelector('.mlb-zp ul').innerHTML = arr

// 生活随笔的遍历

// text:''

const shengtext = [
    {
        title:'隔热先锋，四季恒温守护',
        url:'../img/恒延门窗/成品展示1.jpg',
        text:'采用先进隔热断桥技术的铝合金门窗，能有效阻隔热量传导。炎炎夏日，阻挡室外热浪；寒冷冬天，留住室内温暖，帮你节省空调、暖气能耗，打造恒温舒适家。'
    },
    {
        title:'降噪神器，静享安逸时光',
        url:'../img/恒延门窗/成品展示2.jpg',
        text:'多道密封胶条与优质中空玻璃加持，铝合金门窗拥有卓越隔音性能。无论是车水马龙的喧嚣，还是邻居的生活杂音，都能被有效隔绝，让家成为宁静港湾。'
    },
    {
        title:'坚固之盾，抵御岁月侵袭',
        url:'../img/恒延门窗/成品展示3.jpg',
        text:'精选高强度铝合金材质，质地坚韧，抗风抗压。同时具备出色抗腐蚀性，无惧日晒雨淋，长久使用也不易变形、褪色，为家提供长久守护。'
    },
    {
        title:'时尚锐器，点亮家居颜值',
        url:'../img/恒延门窗/成品展示5.jpg',
        text:'流畅简洁的线条，丰富多样的色彩与款式，铝合金门窗能完美融入现代简约、欧式典雅、中式古韵等各类装修风格，提升家居整体格调。'
    },
    {
        title:'便捷助手，开启轻松生活',
        url:'../img/恒延门窗/成品展示4.jpg',
        text:'搭配高品质五金配件，操作顺滑无阻。无论是平开窗的大面积通风，还是推拉窗的节省空间，都能轻松实现，为日常使用带来便利。'
    },
    {
        title:'防水卫士，干燥时刻在线',
        url:'../img/恒延门窗/成品展示12.jpg',
        text:'独特排水设计与优秀水密性，让铝合金门窗在暴雨天气也能应对自如。有效防止雨水渗入，保护室内装修与家具，远离潮湿困扰。'
    },
    {
        title:' 安全堡垒，守护家人无忧',
        url:'../img/恒延门窗/成品展示11.jpg',
        text:'可选配夹胶玻璃等安全配置，抗冲击性强，即使玻璃破碎也不会飞溅伤人。搭配防盗锁具，提升家居安全性，让家人安心生活。'
    },
    {
        title:'工艺杰作，细节尽显匠心',
        url:'../img/恒延门窗/成品展示6.jpg',
        text:'从精密的拼接工艺到细腻的表面处理，每一道工序都精益求精。铝合金门窗以卓越品质，诠释对工艺的执着与对生活的热爱 。'
    },   
]

let sheng = ''
shengtext.forEach(item=>{
    sheng +=`

                    <div class="sheng-box">
                        <img src="${item.url}" alt="">
                        <a href="" class="sheng-text">
                            <h4>${item.title}</h4>
                            <h1>${item.text}</h1>
                                
                        </a>   
                </div>`

})

document.querySelector('.sheng').innerHTML = sheng




