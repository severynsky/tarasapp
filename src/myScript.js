var userList; // declare var

$.ajax({  // used  jquery method
  url: "https://jsonplaceholder.typicode.com/users", // url to fetch data, by default req is GET
}).done(function(users) { // if responce call lambda function with `data` param
  users.map(function(user){ // loop on each and do action with `user` param
  	$('#dataPlace').append('<p class="user">' + user.name + '</p>');
  })
});


$('#dataForm').submit(function(event){
  var data = { //grab data from form inputs
    email: $('#exampleInputEmail1')[0].value,
    textData: $('#exampleTextarea')[0].value
  }
  console.info(data);
  $('#exampleInputEmail1')[0].value = ''; // clear data input because no default realod behavior
  $('#exampleTextarea')[0].value = '';
  event.preventDefault(); // prevent default page realod

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    type: 'POST',
    data: data
  }).done(function(users) {

  });

});
