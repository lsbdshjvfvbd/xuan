
// 作品的遍历

const zpimgs =[
    {url:'../img/科顺防水/成品展示1.jpg',title:'展示柜'},
    {url:'../img/科顺防水/成品展示6.jpg',title:'简约柜'},
    {url:'../img/科顺防水/成品展示11.png',title:'厨房柜'},
    {url:'../img/科顺防水/成品展示4.jpg',title:'欧风展示柜'},
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
        title:'速贴100瓷砖胶',
        url:'../img/科顺防水/成品展示5.jpg',
        text:'速贴100瓷砖胶是以优质水泥、精致细骨料和改性聚合物和各种助剂经过科学配制而成的特种砂浆产品，产品直接加水搅拌即可使用，用于粘贴高吸水率瓷砖。相对于传统的水泥砂浆，产品具有粘结强度高、铺贴施工简易、薄贴有效节省空间损耗、省工省时等特点'
    },
    {
        title:'多功能瓷砖背胶',
        url:'../img/科顺防水/成品展示9.png',
        text:'产品特点：1.超强粘结，持久防掉砖，2.耐水耐候，应用范围广，3.瓷砖界面增糙，抵抗收缩空， 4.可滚涂施工，更高效便捷。<br>本产品以高分子聚合物乳液、优质水泥、砂以及多种改性助剂精制而成的双组分背胶产品，具有应用范围广、粘结强度高、耐水耐候施工高效等特点，该产品可用于破化砖、仿古砖等低吸水率瓷砖的背面处理，与科顺瓷砖胶配合使用，可有效减少瓷砖空鼓脱落现象。'
    },
    {
        title:'环氧干挂胶',
        url:'../img/科顺防水/成品展示7.png',
        text:'干挂胶又称环氧AB胶（双组份胶），主要由环氧树脂与胺类固化剂，加入填充料（石英粉、碳酸钙等）和助剂组成。因其常作为内外墙石材与干挂件拼装用胶，代替了传统混凝土的湿挂粘贴，故取名为干挂胶。'
    },
    {
        title:'5合1背胶',
        url:'../img/科顺防水/成品展示10.png',
        text:'本产品是以改性高分子聚合物乳液及多种功能助剂精制而成的单组分水性产品，采用创新抗裂纤维及彩色配方，具有初粘性好、粘结强度高、耐水耐热、彩色防漏涂等特点。产品适用于各种瓷砖的背面处理，与科顺瓷砖胶配合使用，可有效减少瓷砖空鼓脱落现象。'
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




