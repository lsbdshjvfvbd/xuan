

const shengtext3 = [
    {
        title:'简约现代风格的斗柜',
        url:'../img/鸿艺全屋定制/成品展示1.jpg',
        text:'线条简洁，色彩明快；欧式古典风格的斗柜造型华丽，有精美的雕花和装饰；日式风格的斗柜注重自然材质和简约设计。'
    },
    {
        title:'将衣柜和梳妆台结合设计',
        url:'../img/鸿艺全屋定制/成品展示7.jpg',
        text:'节省空间，使卧室布局更合理。梳妆台可嵌入衣柜中间，也可与衣柜并排设计。'
    },

    {
        title:'简约大气，节省空间',
        url:'../img/鸿艺全屋定制/成品展示2.jpg',
        text:'平开门简洁大气，密封性好；移门节省空间，适合小卧室；折叠门可灵活开合，增加使用便利性。'
    },
    {
        title:'展示柜',
        url:'../img/鸿艺全屋定制/成品展示8.jpg',
        text:'合页决定柜门开合的顺畅度和使用寿命；拉手的款式和材质多样，要与整体风格匹配；挂杆要坚固，能承受衣物重量。'
    },
    {
        title:'实木柜',
        url:'../img/鸿艺全屋定制/成品展示6.jpg',
        text:'木质床头柜给人温暖自然的感觉，与各种卧室风格都能融合；皮质床头柜柔软舒适，增添卧室的温馨氛围；金属床头柜则具有现代感和时尚感。'
    },
    {
        title:'床尾柜',
        url:'../img/鸿艺全屋定制/成品展示9.jpg',
        text:'可用于放置衣物、床上用品等，也可作为展示区，摆放装饰品、香薰等，提升卧室氛围。对于空间较大的卧室，还可作为休闲区，放一些杂志、饮品等。'
    },

]
let sheng3 = ''
shengtext3.forEach(item=>{
    sheng3 +=`

                    <div class="sheng-box">
                        <img src="${item.url}" alt="">
                        <a href="" class="sheng-text">
                            <h4>${item.title}</h4>
                            <h1>${item.text}</h1>
                                
                        </a>   
                </div>`

})

document.querySelector('.sheng3').innerHTML = sheng3
