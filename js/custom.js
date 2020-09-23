function inquiryNumber() {

	const now = new Date();

	const totalSeconds = now / 1000;

	window.onload = function () {
		document.getElementById("inq-num").value = Math.round(totalSeconds);
	}

}

inquiryNumber();

function displayInfo() {

	$('.select-branch').change(function(){
			var a = $(this).val();

			if(a == 1) {
				document.getElementById('address').innerHTML = "MacArthur Highway, Dolores, San Fernando City 2000 Pampanga";
				document.getElementById('phone_number').innerHTML = "Accounting: +63.45.961.8546";
				document.getElementById('phone_number_2').innerHTML = "Loans: +63.45.961.2786";
				document.getElementById('phone_number_3').innerHTML = "";
			}

			if(a == 2) {
				document.getElementById('address').innerHTML = "Rizal Street, Angeles City 2009 Pampanga";
				document.getElementById('phone_number').innerHTML = "+63.45.322.1882";
				document.getElementById('phone_number_2').innerHTML = "+63.45.322.1884";
				document.getElementById('phone_number_3').innerHTML = "+63.45.405.0611";
			}

			if(a == 3) {
				document.getElementById('address').innerHTML = "Manongtong Bldg, Tarlac City, Tarlac";
				document.getElementById('phone_number').innerHTML = "+63.45.982.2179";
				document.getElementById('phone_number_2').innerHTML = "+63.45.982.2207";
				document.getElementById('phone_number_3').innerHTML = "";
			}

			if(a == 4) {
				document.getElementById('address').innerHTML = "Burgos Av, Cabanatuan City 3100 Nueva Ecija";
				document.getElementById('phone_number').innerHTML = "+63.44.463.8586";
				document.getElementById('phone_number_2').innerHTML = "+63.44.464.0349";
				document.getElementById('phone_number_3').innerHTML = "";
			}

			});
}

displayInfo();