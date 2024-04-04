document.querySelector('.tab-menu').addEventListener('click',(e)=>{
    let idx;
    document.querySelectorAll('.tab-menu div').forEach((el,i)=>{
        if(el == e.target){
            idx = i;
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    });
    document.querySelectorAll('.tab').forEach((el,i)=>{
        if(i == idx){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    });
})
document.querySelectorAll('.tab-notice a').forEach((el)=>el.addEventListener('click',(e)=>{
    document.querySelector('.modal').classList.add('open');
}))
document.querySelector('.modal button').addEventListener('click',(e)=>{
    document.querySelector('.modal').classList.remove('open');
})
document.addEventListener('DOMContentLoaded',()=>{
    let idx = 0;
    setInterval(()=>{
        idx++
        if(idx > 2){
            idx = 0;
        }
        document.querySelector('.slide ul').style.top = idx*-300 + 'px';
    },2000)
})