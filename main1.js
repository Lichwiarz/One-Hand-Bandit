//Main JS script for page
function spin(){
    darwPicture();
}
var points = 200;
function darwPicture(){
    var images = new Array();
    images[0] = "<img src='Pictures_To_Draw/Bananas.jpg' alt='Obrazek'>";
    images[1] = "<img src='Pictures_To_Draw/Cherries.jpg' alt='Obrazek'>";
    images[2] = "<img src='Pictures_To_Draw/Gold.jpg' alt='Obrazek'>";
    images[3] = "<img src='Pictures_To_Draw/Heart.jpg' alt='Obrazek'>";
    images[4] = "<img src='Pictures_To_Draw/Lemon.jpg' alt='Obrazek'>";
    images[5] = "<img src='Pictures_To_Draw/Peach.jpg' alt='Obrazek'>";
    images[6] = "<img src='Pictures_To_Draw/Plum.jpg' alt='Obrazek'>";
    images[7] = "<img src='Pictures_To_Draw/Seven.jpg' alt='Obrazek'>";

    for(let i=0; i<1; i++){
        var a = randomNumber();
        document.getElementById('CenterContainer').innerHTML = '<div class="RandomPicture">'+images[a]+'</div>';

        var b = randomNumber();
        document.getElementById('CenterContainer').innerHTML += '<div class="RandomPicture">'+images[b]+'</div>';

        var c = randomNumber();
        document.getElementById('CenterContainer').innerHTML += '<div class="RandomPicture">'+images[c]+'</div>';

        var d = randomNumber();
        document.getElementById('CenterContainer').innerHTML += '<div class="RandomPicture">'+images[d]+'</div>';
        
        document.getElementById('CenterContainer').innerHTML += '<button id="SpinButton" type="button" onclick="spin()">SPIN (-20)</button>';
    }

    let sum=0;
    if(a == b) sum += 1;
    if(a == c) sum += 1;
    if(a == d) sum += 1;
    if(b == c) sum += 1;
    if(b == d) sum += 1;
    if(c == d) sum += 1;
    
    let newPoints=0;
    if(sum > 0 && sum <= 1) newPoints += 20;
    if(sum >= 2 && sum <= 3) newPoints += 40;
    if(sum >= 4 && sum <= 5) newPoints += 40;
    if(sum == 6) newPoints += 90;

    points = points-20;
    points = points+newPoints;

    document.getElementById("points").innerHTML = "All points: <span class='red'>"+points+"</span>";
    document.getElementById("newPoints").innerHTML = "New points: +<span class='red'>"+newPoints+"</span>";

    if(points <= 0){
        document.getElementById("CenterContainer").innerHTML = "<h1>Unfortunately you LOST, <br> press <span class='red'>F5</span> to start again</h1>";
    }
}
function randomNumber(){
    var x = Math.random()*8;
    return Math.floor(x);
}