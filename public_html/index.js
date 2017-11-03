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
		success: function (profile) {
			console.log(profile);
			$('#name').val('John');
			var projects = profile.projectsJSON;
			var projectAmount = projects.length;
			for(var i = 0; i < projectAmount; i++) {
				$('#projects').append('<div class="card horizontal">\n' +
					'        <div class="card-image center" style="padding-left: 10px; margin-top: 10px;">\n' +
					'            <img width="86" height="86" src="https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png">\n' +
					'            <h6>Student Corner</h6>\n' +
					'        </div>\n' +
					'        <div class="card-stacked">\n' +
					'            <div class="card-content">\n' +
					'                <p>This is an short, but helpful project description. </p>\n' +
					'                <a href="#" style="margin-top: 40px;" class="btn blue waves-effect">Go</a>\n' +
					'            </div>\n' +
					'        </div>\n' +
					'    </div>')
			}
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
