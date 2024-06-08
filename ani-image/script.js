const pics=document.querySelectorAll('.pic');

pics.forEach(pic=>{
pic.addEventListener('click',function(){
    removeActive();
    pic.classList.add('active');
})
});

function removeActive(){
    pics.forEach(pic=>{
        pic.classList.remove('active');
    })
}
