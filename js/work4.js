
// 作品的遍历

const zpimgs =[
    {url:'../img/鸿艺全屋定制/成品展示1.jpg',title:'展示柜'},
    {url:'../img/鸿艺全屋定制/成品展示2.jpg',title:'简约柜'},
    {url:'../img/鸿艺全屋定制/成品展示3.jpg',title:'厨房柜'},
    {url:'../img/鸿艺全屋定制/成品展示10.jpg',title:'欧风展示柜'},
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
        title:'加工区域',
        url:'../img/鸿艺全屋定制/工厂展示图1.jpg',
        text:' 原材料堆放区堆满了各种优质的木材、板材和五金配件。这些原材料来自世界各地，每一批都经过严格的质量检测，确保符合环保和耐用的标准。'
    },
    {
        title:'板块包装区',
        url:'../img/鸿艺全屋定制/工厂展示图2.jpg',
        text:'巨大的空间内井然有序地划分着各个生产区域。现代化的机械设备整齐排列，工人们在各自的岗位上忙碌而专注，整个工厂呈现出一种高效而和谐的工作氛围。'
    },

    {
        title:'原材料堆放区',
        url:'../img/鸿艺全屋定制/工厂展示图4.jpg',
        text:'开料区是整个生产过程的第一步，也是至关重要的环节。先进的数控开料设备在这里大展身手，它就像一位精准的工匠，根据设计图纸上的尺寸数据，将大块的板材进行精确切割。'
    },
    {
        title:'封边区',
        url:'../img/鸿艺全屋定制/工厂展示图3.jpg',
        text:'切割好的板材边缘较为粗糙，且容易受潮变形，因此需要进行封边处理。封边区里，一排排自动化封边机整齐排列，工人们将切割好的板材依次放入封边机中。'
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




