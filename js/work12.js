
// 借鉴传统中式建筑中的元素，融入中式的立柱造型，体现出中式文化的韵味。
text:''
const shengtext = [
    {
        title:'欧洲古典风',
        url:'../img/鑫达扶手1.jpg',
        text:'特点：采用红、棕等传统颜色，与中式家具和装修的色调相呼应，营造出古朴、大气的空间氛围。'
    },
    {
        title:'中国古典风',
        url:'../img/鑫达扶手2.jpg',
        text:'借鉴传统中式建筑中的元素，融入中式的立柱造型，体现出中式文化的韵味。'
    },

    {
        title:'现代简约风',
        url:'../img/鑫达扶手3.jpg',
        text:'特点：通常采用直线条和几何形状，没有过多复杂的装饰，如直角、方形、圆形等，给人干净利落的感觉。'
},
    {
        title:'欧式古典风格',
        url:'../img/鑫达扶手4.jpg',
        text:'特点：巴洛克风格的扶手会有复杂的螺旋形或S形曲线，洛可可风格则有更多的C形、S形和漩涡形装饰，展现出奢华与优雅。'
    },
    {
        title:'工业风格',
        url:'../img/鑫达扶手5.jpg',
        text:'特点：整体散发着机械时代的粗犷与质朴，凸显个性，适合追求个性与工业美感的用户，为空间注入不羁的工业魅力。'
    },
    {
        title:'田园风格',
        url:'../img/鑫达扶手6.jpg',
        text:'特点：模拟实木扶手的温润轮廓 ，保留自然的弯曲弧度与纹理走向，没有过多繁杂装饰。既能拥有铝合金的耐用，又不失原木的温馨'
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