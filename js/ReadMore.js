const readmore = document.querySelectorAll('.read-more-btn');
const expand = document.querySelectorAll('.info-column .inner-column .text');
readmore.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        expand[index].classList.toggle('showText');
        if(element.innerText == 'Read More'){
            element.innerText = 'Read Less'
        }
        else{
            element.innerText = 'Read More'
        }
    })
})