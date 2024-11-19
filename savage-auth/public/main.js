// rvNhJy94TJitcyjO
// mongodb+srv://christianbradford99:rvNhJy94TJitcyjO@cluster0.r09pe.mongodb.net/
// mongodb+srv://christianbradford99:<db_password>@cluster0.tgvj0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
var filledInHearts = document.getElementsByClassName("fa fa-heart");
var hearts = document.getElementsByClassName("fa fa-heart-o");
var trash = document.getElementsByClassName("fa-trash-o");
// var saveGoals = document.querySelectorAll("div button");

Array.from(hearts).forEach(function(heart) {
      heart.addEventListener('click', function(){
        const movie = this.parentNode.parentNode.childNodes[1].innerText
        console.log(movie)
        fetch('addToWatched', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'movie': movie
            
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(filledInHearts).forEach(function(filledInHeart) {
  filledInHeart.addEventListener('click', function(){
    const movie = this.parentNode.parentNode.childNodes[1].innerText
    console.log(movie)
    fetch('removeFromWatched', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'movie': movie
        
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const movie = this.parentNode.parentNode.childNodes[1].innerText
        fetch('deleteMovie', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'movie' : movie
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
