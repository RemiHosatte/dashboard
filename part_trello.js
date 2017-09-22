//Function for update state of tasks and this image (check/uncheck)
function updateState(elm) {
  var imgLink = elm.getElementsByTagName('img')[0].getAttribute('src');

  if (imgLink == 'uncheck.png')
  {
    elm.getElementsByTagName('img')[0].src = 'check.png';
    elm.getElementsByClassName("nameTask")[0].style.cssText +=
    "text-decoration: line-through;" +
    "color:#424242;" +
    "font-style:italic;";
  }
  else {
    elm.getElementsByTagName('img')[0].src = 'uncheck.png';
    elm.getElementsByClassName("nameTask")[0].style.cssText +=
    "text-decoration: none;" +
    "color:white;" +
    "font-style:normal;";
  }
}

//Display tasks on the dashboard
var displayCards = function(cards)
{
  $.each(cards, function(index, value) {
    $('.tasksList')
    .append('<div class="row task" onclick="updateState(this)">' +
    '<div class="col-sm-2 containerPerso state"  >' +
    '<img  id="' + value.id + '" class="stateImg" src="uncheck.png" height="30px"/></div>' +
    '<div class="col-sm-10 nameTask containerPerso">' + value.name +'</div>' +
    '</div>');
    //console.log(value.name);


  });
};

//Load tasks from the list selected
var loadCards = function(list)
{
  Trello.get(
    'lists/'+ list +'/cards',
    displayCards,
    function() { console.log("Fail to load cards"); }
  );
};
//Select list "A FAIRE" from board's array
var displayList = function(lists) {
  $.each(lists, function(index, value) {

    if (value.name =="A FAIRE")
    {
      loadCards(value.id);
    }
  });
}

//Load all lists from the board
var loadListFromBoard = function(id) {
    console.log("Chargement du tableau ");
    Trello.get(
      '/boards/' + id + '/lists',
      displayList,
      function() { console.log("Fail to load lists"); }
    );
};
//Select board "PERS" from board's array
var loadedBoards = function(boards) {
  $.each(boards, function(index, value) {
    if (value.name =="PERS")
    {

      loadListFromBoard(value.id);
    }
  });
};


//Load all the board of the user connected
var loadBoardFromUser = function() {

  console.log('Successful authentication');
  Trello.get(
    '/members/me/boards',
    loadedBoards,
    function() { console.log("Failed to load boards"); }
  );
};
//If connexion failure
var authenticationFailure = function() {
  console.log('Failed authentication');
};
//Trello popup connexion
window.Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: loadBoardFromUser,
  error: authenticationFailure
});
