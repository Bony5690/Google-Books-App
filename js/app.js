// $(document).ready(function(){
//   $("#myform").submit(function(){
//
//   var search = $("#books").val();
//
//    if(search == ''){
//      alert("Please enter something in the field first");
//    }
//
//    else {
//      var url = '';
//      var img = '';
//      var title = '';
//      var author = '';
//      var publishing = '';
//
//     $.get(" https://www.googleapis.com/books/v1/volumes?q= " + search, function(response){
//       console.log(response);
//     });
//
//
//    }
//
//
//   });
//
//   return false;
// });
//
     var url = '';
     var img = '';
     var title = '';
     var author = '';
     var publishing = '';


function bookSearch(){
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  // document.getElementById('image').innerHTML = ""
  console.log(search);
$.ajax({
  url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
  dataType: "json",

  success: function(data){
    for(var i = 0; i < data.items.length; i++)
    {
    // title =      results.innerHTML += "<h2>" + data.items[i].volumeInfo.title +   "</h2>"
    title = $('<h5 class = "center-align">' + data.items[i].volumeInfo.title + '</h5>');
    author = $('<h5 class = "center-align">' + data.items[i].volumeInfo.authors + '</h5>');
    publishing = $('<h5 class = "center-align">' + data.items[i].volumeInfo.publisher + '</h5>');
    img = $('<img  class = "aligning"><br><a href=' + data.items[i].volumeInfo.infoLink + '><button class=" aligning btn btn-danger  ">Read more</button></a>');
    url = data.items[i].volumeInfo.imageLinks.thumbnail;
    img.attr('src', url); // attach the image url

    title.appendTo("#results");
    author.appendTo("#results");
    publishing.appendTo("#results");
    img.appendTo("#results");
      console.log(data);
    }
  },

  type: 'GET'
})

}



document.getElementById('button').addEventListener('click', bookSearch, false);
