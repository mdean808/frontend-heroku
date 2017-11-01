var loggedIn = false;
function logIn() {
    loggedIn = true;
    loadLogin();
}

function loadLogin() {

}

function loadProfile() {
    $.ajax({
		method: 'post',
		url: '/get-userinfo',
		data: {
			user: getQueryString('id')
		},
		success: function (results) {
			console.log(results);
		},
		error: function (result, err) {
			console.log(err);
			console.log(result);
		}
	})
}


var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};
