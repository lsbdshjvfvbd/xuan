
// 作品的遍历

const zpimgs =[
    {url:'../img/鸿达扶手/成品展示1.jpg',title:'展示柜'},
    {url:'../img/鸿达扶手/成品展示2.jpg',title:'简约柜'},
    {url:'../img/鸿达扶手/成品展示3.jpg',title:'厨房柜'},
    {url:'../img/鸿达扶手/成品展示1.jpg',title:'欧风展示柜'},
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

text:''

const shengtext = [
    {
        title:'现代简约风铝合金扶手',
        url:'../img/鸿达扶手/成品展示1.jpg',
        text:' 利落的直线条勾勒，窄边设计搭配哑黑或亮银色调，与玻璃栏板组合，适配现代简约家居，为楼梯与阳台添流畅时尚感。'
    },
    {
        title:'将衣柜和梳妆台结合设计',
        url:'../img/鸿达扶手/成品展示10.png',
        text:'表面经特殊工艺处理，模拟古铜质感，精致雕花装饰扶手两端，搭配厚实实木踏板，为欧式别墅打造复古奢华氛围。'
    },

    {
        title:'新中式风铝合金扶手',
        url:'../img/鸿达扶手/成品展示2.jpg',
        text:'融入中式回形纹元素，采用拉丝香槟金色铝合金，搭配木质立柱，在中式庭院或客厅楼梯处，展现传统与现代交融之美。'
        
    },
    {
        title:'工业风铝合金大门',
        url:'../img/鸿达扶手/成品展示8.jpg',
        text:'保留铝合金原始金属质感，焊点外露，搭配黑色金属管和粗粝水泥墙面，是工业风loft空间的个性之选。'
        
    },
    {
        title:'小户型铝合金扶手',
        url:'../img/鸿达扶手/成品展示3.jpg',
        text:'采用极细铝合金管材，以纤细轻盈的外观设计，搭配透明玻璃栏板，减少空间压迫感，让小户型楼梯区域更显开阔。'
    },
    {
        title:'铝合金防盗窗',
        url:'../img/鸿达扶手/成品展示12.png',
        text:'它的外观简约，表面经氧化或喷涂处理，有多种色泽可选，适配不同建筑风格。网格或栅栏结构设计，既保障通风采光，又具备良好防盗性能，安装方便，是实用的家居安全防护设施。'

    },

    {
        title:'庭院风铝合金大门',
        url:'../img/鸿达扶手/成品展示4.jpg',
        text:'铝合金农村大门以其优良的材料特性、严谨的生产工艺、显著的优势特点和贴心的定制服务，成为农村住宅大门的理想选择。它不仅为农村家庭带来了安全与美观，更体现了现代建筑材料与工艺在乡村建设中的应用与发展，为农村生活品质的提升贡献力量.'
        
    },
    {
        title:'环保主题铝合金扶手',
        url:'../img/鸿达扶手/成品展示5.jpg',
        text:'使用回收铝合金材料制成，表面印上环保标语和自然图案，倡导绿色生活理念，适合环保主题空间或绿色建筑。'
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




