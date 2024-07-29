const items=document.querySelectorAll(".list-item")
const container=document.querySelector(".list")
const scoll=document.querySelector(".carourcler")
const next=document.querySelector(".next")
const prev=document.querySelector(".prev")
const buttonn=document.querySelectorAll(".btn")
var indexItem=0;
var remove=undefined;
const indexWidth=items[0].offsetWidth;
const move=(index)=>{
     container.style.transform=`translateX(-${index*indexWidth}px)`
     indexItem=index
     const arrbtn =[...buttonn].filter(function(value,indexx){
           return indexx==index
     })
      const arrbtn2=[...buttonn].filter(function(value,indexx){
        return indexx!==index
      })
     arrbtn2.forEach(function(value,i){
         if(value.className.includes("active")){
             value.classList.remove("active")
         }
     })
      arrbtn[0].classList.add("active")
}
function startSlide(){
    remove=setInterval(function(){
        var index=indexItem+1
        if(index>=items.length){
            index=0
        }
        console.log(index)
        move(index)
    },5000)
}
function reset(){
    clearInterval(remove)
    startSlide()
}
startSlide()
prev.onclick=function(){
    move((indexItem+1)% items.length)
    reset()
}
next.onclick=function(){
    move((indexItem-1+items.length)%items.length)
    reset()
}
buttonn.forEach((item,index)=>{
    item.onclick=function(){
        move(index)
        reset()
    }
})
// Chuyen mau xe
// chuyen theo nut
const style_color=document.querySelectorAll(".style-color div")
const itemsImg=document.querySelectorAll(".style-img-item")
const containerImg=document.querySelector(".style-img")
const banner=document.querySelector(".style-img-box")
const nextImg=document.querySelector(".next1")
const prevImg=document.querySelector(".prev1")
const change_photo=document.querySelector(".style-img-item img")
var indexItemImg=0;
const arrImg=[
    "./assets/imgs/red-removebg-preview.png",
    "./assets/imgs/white-removebg-preview.png",
    "./assets/imgs/blue-removebg-preview.png",
    "./assets/imgs/black-removebg-preview (2).png"
]
var remo2=undefined;
const indexWidthImg=itemsImg[0].offsetWidth;
const moveImg=(value,index)=>{
    //  containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
    change_photo.setAttribute("src",value)
    change_photo.classList.add("animion")
    setTimeout(function(){
       change_photo.classList.remove("animion")
    },500)
     indexItemImg=index
}
prevImg.onclick=function(){
    var item =(indexItemImg+1) %arrImg.length;
    const arrPrev=arrImg.filter(function(value,index){
           return item==index
    })
     moveImg(arrPrev[0],item)
     reset2()
    // moveImg((indexItemImg+1)% itemsImg.length)
}
nextImg.onclick=function(){
    var item= (indexItemImg-1+arrImg.length)%arrImg.length;
    const arrPrev=arrImg.filter(function(value,index){
        return item==index
 })
      moveImg(arrPrev[0],item)   
      reset2()
}
const moveImg2=(index)=>{
    containerImg.style.transform=`translateX(-${index*indexWidthImg}px)`
    indexItemImg=index
}
style_color.forEach(function(value,index){
     value.onclick=function(){
        moveImg(value.getAttribute("data-img"),index)
        reset2()
     }
})
function startCar(){
     remo2=setInterval(function(){
        let item=(indexItemImg+1) %arrImg.length;
        const arrPrev=arrImg.filter(function(value,index){
           return item==index
    })
     moveImg(arrPrev[0],item)
   },5000)
}
startCar()
function reset2(){
    clearInterval(remo2)
    startCar()
}
// model
const telephone=document.querySelector(".telephone")
const model=document.querySelector(".modelone")
const close=document.querySelector(".close")
telephone.onclick=function(){
    console.log("1")
    model.classList.add("active")
}
close.onclick=function(){
    model.classList.remove("active")
}
model.onclick=function(e){
  if(e.target===model){
    model.classList.remove("active")
  }
}
// quiz
const title_parameter=document.querySelectorAll(".parameter-quiz")
const parameter_item=document.querySelectorAll(".parameter-item-box")
const title_add=document.querySelectorAll(".title-add")
title_parameter.forEach(function(item,index){
   var arr=[]
   var arrr=[]
   item.onclick=function(){
     arr=[...parameter_item].filter(function(number,i){
        return i!==index
    })
    arrr=[...title_add].filter(function(number,key){
        return key!==index
    })
    arr.forEach(function(value){
        if(value.className.includes("active")){
               value.classList.remove("active")
        }          
  })
  arrr.forEach(function(value,index){
        if(value.className=="fa-solid fa-chevron-down title-add"){
            value.className="fa-solid fa-angle-right title-add"
        }
   })
     if(item.lastElementChild.className.includes("active")){
        item.lastElementChild.classList.remove("active")
        title_add[index].className="fa-solid fa-angle-right title-add"
     }else{
        item.lastElementChild.classList.add("active")
        title_add[index].className="fa-solid fa-chevron-down title-add"
     }
   }
})

var login=document.querySelector(".header_icon ")
const button=document.querySelector(".button")
button.onclick=function(){
    model.classList.add("active")
}
console.log(login)
login.onclick=function(){
    model.classList.add("active")
}
var login=document.querySelectorAll(".button2")
console.log(login)

login.forEach(
    login.onclick=function(value,index){
        value.onclick=function(){
            model.classList.add("active")
        }
    }
)
var table_img=document.querySelector(".baner_car")
console.log(table_img)
window.addEventListener('scroll', function() {
    var currentScrollPosition = window.pageYOffset;
   if(currentScrollPosition>=300){
       table_img.classList.add("active")
   }
  });
/* click img hien imgfull*/ 
const model2=document.querySelector(".modeltwo")
const modelfullimg=document.querySelector(".modelfull img")
const close2=document.querySelector(".closetwo")
var clickimg=document.querySelectorAll(".click")
close2.onclick=function(){
    model2.classList.remove("active")
}
clickimg.forEach(function(value,item){
    value.onclick=function(){
        let img=value.getAttribute("src")
        modelfullimg.setAttribute("src",img)
        model2.classList.add("active")
    }
});
model2.onclick=function(e){
    if(e.target!=modelfullimg){
      model2.classList.remove("active")
    }
  }
const img_right=document.querySelector(".img-right")
window.addEventListener('scroll', function() {
    var currentScrollPosition2 = window.pageYOffset;
   if(currentScrollPosition2>=1400){
       img_right.classList.add("active")
   }
  });
const banner1=document.querySelector(".banner1")
banner1.onclick=function(){
    model.classList.add("active")
}
//  nav hiden
var isClick=false
const navbar_hiden=document.querySelector(".navbar_hiden")
const naver=document.querySelector(".naver")
const icon=document.querySelector(".naver i")
naver.onclick=function(){
    if(isClick){
        icon.setAttribute("class","fa-solid fa-bars")
        navbar_hiden.classList.remove("active")
        isClick=false
    }else{
        icon.setAttribute("class","fa-solid fa-xmark")
        navbar_hiden.classList.add("active")
        isClick=true
    }
}
const subnav=document.querySelector(".subnav")
subnav.onclick=function(){
    model.classList.add("active")
}