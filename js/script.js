$("document").ready(function(){

	// Events for Home Page Events-Card
	var urlEventsJSON = "/json/events.json";
	var urlNewsJSON = "/json/news.json";
	var urlNoticesJSON = "/json/notices.json";
	var urlFacultyCareerJSON = "/json/facultycareer.json";
	var urlOldTenderJSON = "/json/tenderold.json";
    var urlNewTenderJSON = "/json/tendernew.json";
	var urlBOGMinutesJSON = "/json/bogminutes.json";
    var urlSenateMinutesJSON = "/json/senateminutes.json";

	//Events for Home Page Events-Card
	$.getJSON(urlEventsJSON, function(data){
		$("#events-card").html("");
		var i = 0;
		$.each(data, function(key, val){
			if(val["isNew"] === true && i < 3){
				if(val["url"] == ""){
					$("#events-card").append('<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p><hr/> ');
//                    $("#events-card").append('<h5 style="text-align: left; color: #1c4f7a;">'+ key +'</h5>'+
//					'<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p><hr/> ');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#events-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
//                    $("#events-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '"><h5 style="text-align: left; color: #1c4f7a;">'+ key +'</h5>'+
//					'<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				else{
					$("#events-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
//                    $("#events-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank"><h5 style="text-align: left; color: #1c4f7a;">'+ key +'</h5>'+
//					'<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				i++;
			}			
		 });
	});

	//News for Home Page News-Card
	$.getJSON(urlNewsJSON, function(data){
		$("#news-card").html("");
		var i = 0;
		$.each(data, function(key, val){
			if(val["isNew"] === true && i < 3){
				if(val["url"] == ""){
					$("#news-card").append(
					'<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p><hr/> ');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#news-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				else{
					$("#news-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				i++;
			}
		});
	});

	//Notices for Home Page Notices-Card
	$.getJSON(urlNoticesJSON, function(data){
		$("#notices-card").html("");
		var i = 0;
		$.each(data, function(key, val){	
			if(val["isNew"] === true && i < 5){
				if(val["url"] == ""){
					$("#notices-card").append('<p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p><hr/> ');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#notices-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				else{
					$("#notices-card").append('<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank"><p style="color: white; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a><hr/>');
				}
				i++;
			}
		});
	});

	// Faculty Career page for New Career Notices
	$.getJSON(urlFacultyCareerJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === true){
				if(val["url"] == ""){
					$("#new-career-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#new-career-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#new-career-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	// Faculty Career page for Old Career Notices
	$.getJSON(urlFacultyCareerJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#old-career-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#old-career-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#old-career-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});


	//Tender Page for Old Tender Notices
	$.getJSON(urlOldTenderJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#old-tender-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#old-tender-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#old-tender-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});
    
    
    //Tender Page for New Tender Notices
	$.getJSON(urlNewTenderJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#new-tender-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#new-tender-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#new-tender-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});


	// Events page for Upcoming Events Content
	$.getJSON(urlEventsJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === true){
				if(val["url"] == ""){
					$("#upcoming-events").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#upcoming-events").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#upcoming-events").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	// Events page for Passed Events Content
	$.getJSON(urlEventsJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#passed-events").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#passed-events").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#passed-events").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	// News page for Latest News
	$.getJSON(urlNewsJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === true){
				if(val["url"] == ""){
					$("#latest-news").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#latest-news").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#latest-news").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	// News page for Old News
	$.getJSON(urlNewsJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#old-news").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#old-news").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#old-news").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	//Notice page for New Notices
	$.getJSON(urlNoticesJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === true){
				if(val["url"] == ""){
					$("#new-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#new-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#new-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	//Notice page for Old Notices
	$.getJSON(urlNoticesJSON, function(data){
		$.each(data, function(key, val){
			if(val["isNew"] === false){
				if(val["url"] == ""){
					$("#old-notices").append('' + 
					'<h5 style="text-align: left; color: #1c4f7a;  font-size: medium;">' + 
						'<strong>'+ key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p>' +
					'<hr/>' +
					'');
				}
				else if(val["url"].split("")[0] == "/"){
					$("#old-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
				else{
					$("#old-notices").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '" target="_blank">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
				}
			}
		});
	});

	//BOG Minutes 
	$.getJSON(urlBOGMinutesJSON, function(data){
		$.each(data, function(key, val){
			$("#bog-minutes").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
		});
	});
    
    //senate minutes
    $.getJSON(urlSenateMinutesJSON, function(data){
		$.each(data, function(key, val){
			$("#senate-minutes").append('' + 
					'<a style="text-decoration: none;" href="'+ val["url"] + '">' + 
					'<h5 style="text-align: left; color: #1c4f7a; font-size: medium;">' + 
						'<strong>' + key +'</strong>' + 
					'</h5>'+
						'<p style="color: black; text-decoration: none; font-size: small;">' + val["description"]  + '</p></a>' + 
					'<hr/>' +
					'');
		});
	});
});



