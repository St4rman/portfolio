// function start(link = "main.html" ){
//     console.log("started");
//     setTimeout(()=> {window.location.href = link;}, 1500)
// }

extendbar();

function extendbar(){
    var bar = document.getElementById("load");
    var width = 1;
    var id = setInterval(frame, 15);
    function frame(){
        if (width >=100){
            clearInterval(id);
        } else {
            width ++;
            bar.style.width = width + '%';
        }
    }
}