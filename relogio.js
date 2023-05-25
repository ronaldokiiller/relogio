let d = new Date();

		 const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

		 const month = ["janeiro","fevereiro","março","abril","maio","junho","agosto","julho","setembro","outubro","novembro","dezembro"];

		 let day = weekday[d.getDay()]+", "+ d.getDate() + " de " + month[d.getMonth()]  + " de " + d.getFullYear();

		 let hour = ("0"+d.getHours()).slice(-2) + " : " + ("0"+ d.getMinutes()).slice(-2) + " : " + ("0"+ d.getSeconds()).slice(-2);

		 document.getElementById("day").innerHTML = day;

		 document.getElementById("clock").innerHTML = hour;

		 setTimeout(function(){
			window.location.reload(1);
			
			}, 1000);
