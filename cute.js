function bam(){
    var nutbammoi=` <div class="khungmoi1">
    <button class="nutbam" onclick="bam1()" >CLICK  💎</button>
    </div>`
    $(".khungmoi").replaceWith(nutbammoi)
  
}
function bam1(){
    
    var nutbammoi=` <div class="khungmoi2">
    <button class="nutbam" onclick="play()" >CLICK  💎</button>
    </div>`
    $(".khungmoi1").replaceWith(nutbammoi)
  
}
function play(){
  var audio = new Audio('zombideathfemale1.mp3');
  audio.play();
    var nutbammoi=`<img id="gif" src="https://thumbs.gfycat.com/FatalInfatuatedBarb-size_restricted.gif">
    `
  var body=document.querySelector("body")
 
 
  
    $(".gif").replaceWith(nutbammoi)
    $(".nutbam").remove()
    body.style.backgroundColor = "black";
}


