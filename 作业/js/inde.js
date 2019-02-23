    let dj = document.getElementsByClassName('dj')[0],
        toP = document.getElementsByClassName('toP')[0],
        fri = document.getElementsByClassName('firstP')[0],
        dj1 = document.getElementsByClassName('dj1')[0],
        three = document.getElementsByClassName('three')[0];
function one(){
    dj.onclick = function(){//第二页显示
        toP.style.display = 'block';
        fri.style.display = 'none';
    }
}
one();

function to(){
    dj1.onclick = () => {
        toP.style.display = 'none';
        three.style.display = 'block';
    }
}
to()