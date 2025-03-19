

// 作品的遍历

const zpimgs =[
    {url:'../img/大角鹿/大角鹿证书.jpg',title:'行业翘楚'},
    {url:'../img/大角鹿/大角鹿证书2.jpg',title:'广州名牌'},
    {url:'../img/大角鹿/大角鹿证书3.jpg',title:'最佳产品'},
    {url:'../img/大角鹿/大角鹿证书.jpg',title:'品牌保证'},
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

const shengtext = [
    {
        title:'金丝绒系列',
        url:'../img/大角鹿/大鹿角作品展示2.jpg',
        text:'优点：耐磨，防污，耐高温，抗冲击，高韧性等，有釉耐磨性4级，莫氏硬度6级的质检报告金丝绒质面，触感温润超亲肤。'
    },
    {
        title:'轻奢大理石',
        url:'../img/大角鹿/大鹿角作品展示.jpg',
        text:'特点：以归真至简的现代“轻+奢”风格呈现在我们面前，摒弃繁索的多线条和勾勒的装修，真切表达生活的本质。'
    },
    {
        title:'通体大理石',
        url:'../img/大角鹿/大鹿角作品展示3.jpg',
        text:'特点：萃取天然大理石的元素精华，以精密数控双重精抛+釉面复合重叠技术完美复刻天然石材的纹理、色泽及质感。'
},
    {
        title:'1：1高透釉',
        url:'../img/大角鹿/大鹿角作品展示4.jpg',
        text:'特点：实现了“0渗透、超抗污、易清洁、超耐磨”四大硬核性能，定义了柔光砖抗污的新标准。'
    },
    {
        title:'柔光转',
        url:'../img/大角鹿/大鹿角作品展示5.jpg',
        text:'特点：解决了普通柔光产品极易产生釉泡、针孔等关键技术问题,有效提高了釉料透光性、耐磨性和发色性能'
    },
    {
        title:'第三代柔光肌肤超耐磨钻石釉',
        url:'../img/大角鹿/大鹿角作品展示6.jpg',
        text:'特点：该系列解决了传统柔光砖耐磨与美观不可兼得的痛点，兼具耐用性与装饰性，满足现代家居对品质与设计的双重需求。'
    },
    {
        title:'“抗污王”柔光砖',
        url:'../img/大角鹿/大鹿角作品展示8.jpg',
        text:'优点：抵御划痕,普通污渍难以渗透,清洁维护成本大幅降低,“超耐磨+超抗污”深受客户喜爱。'
    },
    {
        title:'哑光砖',
        url:'../img/大角鹿/大鹿角作品展示7.jpg',
        text:'特点：解决了普通柔光产品极易产生釉泡、针孔等关键技术问题,有效提高了釉料透光性、耐磨性和发色性能。'
    }

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




