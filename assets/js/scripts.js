function onLoadAnim(){
    let footer = document.getElementById('footer');
    footer.style.transform = "translateY(0%)";
    footer.style.opacity = "100";

    let topBar = document.getElementById('topBar');
    topBar.style.transform = "translateY(0%)";
    topBar.style.opacity = "100";

    let genre = document.getElementById('genre');
    genre.style.transform = "translateY(0%)";
    genre.style.opacity = "100";

    let anime = document.getElementById('anime');
    anime.style.transform = "translateY(0%)";
    anime.style.opacity = "100";
}

function widen(id) {
    document.getElementById(`${id}`).classList.remove('col-lg-3');
    document.getElementById(`${id}`).classList.add('col-lg-6');
}

function shorten(id) {
    document.getElementById(`${id}`).classList.remove('col-lg-6');
    document.getElementById(`${id}`).classList.add('col-lg-3');
}

function showDes(id, iid) {
    document.getElementById(`${id}`).classList.remove('d-none');
    document.getElementById(`${id}`).classList.add('d-flex');
    document.getElementById(`${iid}`).style.opacity = "50%"
    document.getElementById(`${iid}`).style.filter = "blur(4px)"
}

function removeDes(id, iid) {
    document.getElementById(`${id}`).classList.remove('d-flex');
    document.getElementById(`${id}`).classList.add('d-none');
    document.getElementById(`${iid}`).style.opacity = "100%"
    document.getElementById(`${iid}`).style.filter = "blur(0px)"
}

function showMovie(genre) {

    if (genre === 'all') {
        document.querySelectorAll('.movie').forEach(function (x) {
            x.classList.remove('d-none');
        });
    } else {
        document.querySelectorAll('.movie').forEach(function (x) {
            x.classList.remove('d-none');
        });
        document.querySelectorAll('.movie').forEach(function (x) {
            if (!x.classList.contains(genre)) {
                x.classList.add('d-none');
            }
        });
    }
}