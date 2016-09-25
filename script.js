window.onscroll = function (e) {
    if(pageYOffset==window.innerHeight*5){
        window.scrollTo(0, 0);
    }
    else if(pageYOffset==0){
        window.scrollTo(0,document.body.scrollHeight);
    }
    if (pageXOffset !== 0) {
        window.scrollTo(0,pageYOffset);
    }
    document.getElementById("image").style.marginLeft = Math.pow(1.02,((document.getElementById("name").clientHeight *2)-pageYOffset));
}
