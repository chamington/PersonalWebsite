window.onscroll = function (e) {
    if(pageYOffset==window.innerHeight*5){
        window.scrollTo(0, 0);
    }
    else if(pageYOffset==0){
        window.scrollTo(0,document.body.scrollHeight);
    }
}