let selectedBtn=['red','blue','green','yellow'];    

let pattern=[];

let userclick=[];

let started = false;
let level=0;

$('.start').click(function(){
    if(!started) {
        $('.level-title').text('Level'+level);
        seq();
        started=true;
    }
})


$('.btn').click(function(){
    let userselect=$(this).attr('id');
    userclick.push(userselect);
    sound(userselect);
    animate(userselect);
    check(userclick.length-1);
})

function seq(){
    userclick=[];
    level++;
    $("#level-title").text("Level " + level);
    let random=Math.floor(Math.random()*4);
    let selected=selectedBtn[random];
    pattern.push(selected);
    $('#'+selected).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(selected);
  
}


function check(currentLevel){
    if(userclick[currentLevel]===pattern[currentLevel]){
        console.log('sucess');
        if(userclick.length===pattern.length){
            setTimeout(() => {
                seq();
            }, 1000);
        }
    }
    else
    {
        console.log('Wrong')
        sound("wrong");
        $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Start to play again!");
      startOver();
    }
}


function sound(selected){
    let audio=new Audio('sounds/'+selected+'.mp3');
    audio.play();
}

function animate(currentColor){
    $('#'+currentColor).addClass('pressed');

    setTimeout(() => {
        $('#'+currentColor).removeClass('pressed');
    }, 100);
}

function startOver() {
    level = 0;
    pattern = [];
    started = false;
  }

  document.querySelector(".ri-close-line").addEventListener("click",function(){
    document.querySelector(".modal").style.display="none";
  });

  document.querySelector(".help").addEventListener("click",function(){
    document.querySelector(".modal").style.display="unset";
  });
