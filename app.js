function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) {
        var movieName = document.getElementById('movieName').value.trim();
        if (movieName.length > 0) {
            var li = '<li>' + movieName + '</li>';
            document.getElementById('favoriteMovies').innerHTML += li;
        }
        document.getElementById('movieName').value = '';
        return false;
    }
}