
const zpimgs =[
    {url:'../img/博雨鑫/博雨鑫荣誉11.jpg',title:'明眸青春杯'},
    {url:'../img/博雨鑫/博雨鑫荣誉12.jpg',title:'团队季军'},
    {url:'../img/博雨鑫/博雨鑫荣誉13.jpg',title:'抗洪锦旗'},
    {url:'../img/博雨鑫/博雨鑫荣誉5.jpg',title:'博雨鑫杯'},
    {url:'../img/博雨鑫/博雨鑫荣誉6.jpg',title:'优秀组织奖'},
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


// 借鉴传统中式建筑中的元素，融入中式的立柱造型，体现出中式文化的韵味。

const shengtext = [
    {
        title:'工厂直售,惠利万家',
        url:'../img/博雨鑫/博雨鑫工厂图片1.jpg',
        text:'跳过中间商差价，源头直采超实惠。我们是实力厂家，一手货源，品质优、价格美，让您以工厂价带走心仪好物！'
    },
    {
        title:'工厂直售,惠利万家',
        url:'../img/博雨鑫/博雨鑫工厂图片2.jpg',
        text:'我们是源头厂家，省去层层代理费用，直接让利消费者。同样的品质，更低的价格，错过再等一年！'
    },

    {
        title:'工厂直售,惠利万家',
        url:'../img/博雨鑫/博雨鑫工厂图片3.jpg',
        text:' 源头直供，没有中间商赚差价，以出厂价将品质好物送到您手中，性价比远超同行！'
},
    {
        title:'严选精筛，品质无上',
        url:'../img/鑫达扶手4.jpg',
        text:' 厂家直销，是品质与实惠的双重保障。从生产车间到您家，一步到位，全程严控品质，让您放心下单。'
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