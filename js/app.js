     var url = '';
     var img = '';
     var title = '';
     var author = '';
     var publishing = '';
     var message = '';
     var search;

function bookSearch(){
   search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  // document.getElementById('image').innerHTML = ""
  console.log(search);

$.ajax({
  url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
  dataType: "json",

  success: function(data){
    if( !data.items){
      message = $('<h4  class = "center-align"> Sorry no books found </h4>');
     message.appendTo("#results");
     console.log(data);

    } else {
      for(var i = 0; i < data.items.length; i++)
      {

          title = $('<h5 class = "center-align"> Title: ' + data.items[i].volumeInfo.title + '</h5>');
          author = $('<h5 class = "center-align"> Author: ' + data.items[i].volumeInfo.authors + '</h5>');
          publishing = $('<h5 class = "center-align"> Publisher: ' + data.items[i].volumeInfo.publisher + '</h5>');
          img = $('<img  class = "aligning"><br><a href=' + data.items[i].volumeInfo.infoLink + '><button class=" aligning btn btn-danger  ">Read more</button></a>');
          url = data.items[i].volumeInfo.imageLinks.thumbnail;
          img.attr('src', url); // attach the image url


          title.appendTo("#results");
          author.appendTo("#results");
          publishing.appendTo("#results");
          img.appendTo("#results");
          // console.log(data);


      }


    }

  },

  type: 'GET'
})

}





document.getElementById('button').addEventListener('click', bookSearch, false);
