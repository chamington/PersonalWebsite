//There, better
var c = [,,,,]
for (b=0; b <= 5; b++){
    c[b]="rgb("+(Math.floor(Math.random() * 55) + 200)+","+(Math.floor(Math.random() * 55) + 200)+","+(Math.floor(Math.random() * 55) + 200)+")";
}

var links1 = ["name","succeed","math","excel","resume","nameagain"]
var links2 = ["trump","redorgreen","gamble","champernowne","shakespere","trumpagain"]
var links3 = ["MKA","GPA","MLC","TALK","NASA","MKAagain"]
var suffexes = ["","-moz-","-webkit-","-o-"] //I fucking hate how 
for (a = 0; a < suffexes.length; a++) {
    for (ia=0; ia<=5; ia++){
        document.getElementById(links1[ia%6]).style.backgroundImage = suffexes[a]+"linear-gradient(" + c[ia%5] + ", " + c[(ia+1)%5] + ")";
        document.getElementById(links2[ia%6]).style.backgroundImage = suffexes[a]+"linear-gradient(" + c[ia%5] + ", " + c[(ia+1)%5] + ")";
        document.getElementById(links3[ia%6]).style.backgroundImage = suffexes[a]+"linear-gradient(" + c[ia%5] + ", " + c[(ia+1)%5] + ")";
    }
}