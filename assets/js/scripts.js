function widen(id){
    document.getElementById(`${id}`).classList.remove('col-lg-3');
    document.getElementById(`${id}`).classList.add('col-lg-6');
}

function shorten(id){
    document.getElementById(`${id}`).classList.remove('col-lg-6');
    document.getElementById(`${id}`).classList.add('col-lg-3');
}

function showDes(id, iid){
    document.getElementById(`${id}`).classList.remove('d-none');
    document.getElementById(`${id}`).classList.add('d-flex');
    document.getElementById(`${iid}`).style.opacity = "50%"
}

function removeDes(id, iid){
    document.getElementById(`${id}`).classList.remove('d-flex');
    document.getElementById(`${id}`).classList.add('d-none');
    document.getElementById(`${iid}`).style.opacity = "100%"
}