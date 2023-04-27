const Like = document.getElementById("like");
let Dislike = document.getElementById("dislike");
let Comment = document.getElementById('comment');
let Love = document.getElementById('love');
let Others = document.getElementById('others');

let valeur = Like.textContent;

let plus = 0; 
plus = Like.textContent+1;

function AddLike(Element){
    alert(Element);
}

Like.addEventListener("click", ()=>{AddLike(plus);});