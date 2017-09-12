
function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,1000);
}
function dateFr(classname)
{
     // les noms de jours / mois
     var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
     var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
     // on recupere la date
     var date = new Date();
     // on construit le message
     var message = jours[date.getDay()] + " ";   // nom du jour
     message += date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     //message += date.getFullYear();
     document.getElementById(classname).innerHTML = message;
}


window.onload=function() {
  horloge('div_horloge');
  dateFr('div_date');
};
