$(document).ready(function () {
    $("form").on("submit", loginUser);
    function loginUser(){
        var infos = $("input");
        var tabusers = [];
        var listeduser = localStorage.getItem("userlist");
        tabusers = listeduser.split(',');
        console.log (infos[0].value);
        console.log (infos[1].value);
        if (tabusers.indexOf(infos[0].value)== -1) {
	    //Si le login n'existe pas, message d'erreur
            alert("Aucun utilisateur à ce nom");
	    return false;
        }else{
	    //Si il existe...
            var listinfouser = localStorage.getItem(infos[0].value);
            listinfouser = listinfouser.split(",");
            if (infos[1].value == listinfouser[3])
            {
		//Si le login et le mdp correspondent...
                $( ".welcomeholder" ).empty();
                $(".welcomeholder").append(`<h1>Bienvenue ${infos[0].value}</h1>`);
                localStorage.setItem("userlogged",infos[0].value);
                alert("connecté");
            } else{
		//Sinon...
                alert("Mauvais mot de passe");
		return false;
            }
        }
    }
    
});
