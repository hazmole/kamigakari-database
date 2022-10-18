var MyAuth = {};
MyAuth.password = "kamigakari";
MyAuth.key = "kamigakari-auth-status";
MyAuth.authPageUrl  = "./auth.html";
MyAuth.indexPageUrl = "./index.html";

MyAuth.clearCypherStatus = function(){
	localStorage.setItem(MyAuth.key, false);
}
MyAuth.checkAuthentication = function(){
	if(isAtAuthPage()){
		window.onload = function(){
			$("#authBtn").on('click', MyAuth.auth.bind(this));
		}
		return ;
	}

	var status = localStorage.getItem(MyAuth.key);
	if(!status){
		window.location.replace(MyAuth.authPageUrl)
	}

	//-----------
	function isAtAuthPage(){
		return window.location.href.match(/auth\.html$/)!=null;
	}
}
MyAuth.auth = function(){
	var val = $("#password").val();
	if(val !== MyAuth.password){
		document.getElementById("password").setCustomValidity('暗號錯誤');
		return;
	}
	localStorage.setItem(MyAuth.key, true);
	window.location.replace(MyAuth.indexPageUrl)
}

MyAuth.checkAuthentication();
