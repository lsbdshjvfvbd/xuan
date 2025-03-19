const zpimgs =[
    {url:'../img/zp5.jpg',title:'作品名称'},
    {url:'../img/zp5.jpg',title:'作品介绍'},
    {url:'../img/zp5.jpg',title:'作品介绍'},
    {url:'../img/zp5.jpg',title:'作品介绍'},
    {url:'../img/zp5.jpg',title:'作品介绍'},
    {url:'../img/zp5.jpg',title:'作品介绍'},
    {url:'../img/zp5.jpg',title:'作品介绍'},

]
let arr=''

zpimgs.forEach(item =>{
    console.log(item);
    arr +=`
    <li>
    <img src="${item.url}"  alt"">
    <P>${item.title}</p>

    </li>
   
    `
})
document.querySelector('.mlb-zp ul').innerHTML = arr