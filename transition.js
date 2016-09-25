document.getElementById("links").style.display = 'none';
document.getElementById("resumelinks").style.display = 'none';
document.getElementById("seeMoreGit").onclick = function(){
    document.getElementById("links").style.display = 'block';
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
            document.getElementById("image").style.display = 'none';
            document.getElementById("gitback").style.display = 'block';
            var op = 0.1;  // initial opacity
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                document.getElementById("gitback").style.opacity = op;
                document.getElementById("gitback").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
    }, 10);
        } else {
            pos++;
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
        }
    }
}
document.getElementById("gitback").onclick = function(){
    var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.01){
                    clearInterval(timer);
                }
                document.getElementById("gitback").style.opacity = op;
                document.getElementById("gitback").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.5;
            }, 50);
    var elem = document.getElementById("myAnimation");
    var pos = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            document.getElementById("gitback").style.display = 'none';
            document.getElementById("image").style.display = 'block';
            document.getElementById("links").style.display = 'none';
        } else {
            pos--;
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
        }
    }
}







document.getElementById("seeMoreResume").onclick = function(){
    document.getElementById("resumelinks").style.display = 'block';
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
            document.getElementById("image").style.display = 'none';
            document.getElementById("resumeback").style.display = 'block';
            var op = 0.1;  // initial opacity
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                }
                document.getElementById("resumeback").style.opacity = op;
                document.getElementById("resumeback").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
    }, 10);
        } else {
            pos++;
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
        }
    }
}
document.getElementById("resumeback").onclick = function(){
    var op = 1;  // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.01){
                    clearInterval(timer);
                }
                document.getElementById("resumeback").style.opacity = op;
                document.getElementById("resumeback").style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.5;
            }, 50);
    var elem = document.getElementById("myAnimation");
    var pos = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            document.getElementById("resumeback").style.display = 'none';
            document.getElementById("image").style.display = 'block';
            document.getElementById("resumelinks").style.display = 'none';
        } else {
            pos--;
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
            document.getElementById("everything").style.marginLeft = -pos + 'vw';
        }
    }
}