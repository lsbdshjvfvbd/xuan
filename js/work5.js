

// 作品的遍历

const zpimgs =[
    {url:'../img/彩艺建材/成品展示8.jpg',title:'大理石灰'},
    {url:'../img/彩艺建材/成品展示9.jpg',title:'古典白'},
    {url:'../img/彩艺建材/成品展示5.jpg',title:'通体抛光'},
    {url:'../img/彩艺建材/成品展示7.jpg',title:'水泥灰'},
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
        title:'仿大理石白',
        url:'../img/彩艺建材/成品展示5.jpg',
        text:'有仿大理石、仿木纹、几何图形、花卉等，能营造不同装饰效果，仿大理石纹显高档大气；仿木纹营造温馨自然氛围。',
    },
    {
        title:'淡雅米白',
        url:'../img/彩艺建材/成品展示2.jpg',
        text:'从淡雅的米白、浅灰，到浓郁的深蓝、深咖等都有，可依据整体装修风格和个人喜好选，如现代简约风常用素色、冷色调；田园风多用暖色调、柔和色彩。',
    },
    {
        title:'简约风',
        url:'../img/彩艺建材/成品展示1.jpg',
        text:'有仿大理石、仿木纹、几何图形、花卉等，能营造不同装饰效果，仿大理石纹显高档大气；仿木纹营造温馨自然氛围。',
    },
    {
        title:'性能卓越的抛光砖',
        url:'../img/彩艺建材/成品展示10.jpg',
        text:'主要以黏土等天然矿物为原料，经研磨、混合、压制、烧制而成。吸水率相对较高，一般在10% - 20%之间，质地相对较软，常用于墙面装饰，像卫生间、厨房的墙面，价格较为亲民。',
    },
    {
        title:'釉面砖',
        url:'../img/彩艺建材/成品展示3.jpg',
        text:' 在胚体表面施釉烧制，图案丰富，色彩鲜艳，根据光泽度分亮光和哑光，适用于厨房、卫生间墙面。',
    },
    {
        title:' 通体砖',
        url:'../img/彩艺建材/成品展示8.jpg',
        text:'从表面到内部材质、色泽一致，耐磨性佳，防滑性好，常用于客厅、过道地面。',
    },
    {
        title:'抛光砖',
        url:'../img/彩艺建材/成品展示6.jpg',
        text:'通体砖表面打磨抛光，光泽度高、硬度强、耐磨，不过防滑性弱，适合客厅、卧室地面 。',
    },
    {
        title:'玻化砖',
        url:'../img/彩艺建材/成品展示7.jpg',
        text:'高温烧制，瓷化程度高，强度高、吸水率低、抗污性强，常用于商场、酒店等公共场所地面，家居中也适用于客厅。',
    },
    {
        title:'质量判断',
        url:'../img/彩艺建材/成品展示9.jpg',
        text:' 观察外观：检查有无色差、变形、缺角、裂纹，表面平整、色泽均匀、图案清晰的瓷砖质量优。听声音：轻敲瓷砖，声音清脆表明质量好，声音沉闷则可能内部有裂纹或质地疏松。测吸水率：水滴瓷砖背面，吸水慢、扩散小的吸水率低，质量佳，适用于潮湿环境。',
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




