var favoriteMovies = new Firebase('https://flickpick.firebaseio.com/movies');

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) {
        var movieName = document.getElementById('movieName').value.trim();
        if (movieName.length > 0) {
            saveToFirebase(movieName);
        }
        document.getElementById('movieName').value = '';
        return false;
    }
};

function saveToFirebase(movieName) {
    //This function will save movie data to Firebase
    favoriteMovies.push({
        name: movieName
    });
};

function refreshUserInterface(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
    };
    document.getElementById('favoriteMovies').innerHTML = lis;
};

favoriteMovies.on("value", function (snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    key: key
                })
            }
        }
    }
    //Refresh the user interface
    refreshUserInterface(list);
});