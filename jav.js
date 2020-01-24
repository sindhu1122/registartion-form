function validate() {
			var fname=$("#first").val();
			var uname=$("#uname").val();
			var pword=$("#pword").val();
			var pcode=$("#pcode").val();
			var pcword=$("#pcword").val();
			var mno=$("#mno").val();
			var emai=$("#em").val();
			var regexp=/^[a-zA-Z]+$/;
			var regexp_user=/^[a-zA-Z0-9_]+$/;
			var regexp_pcode=/^[0-9]+$/;
			var reg_exp_ecode=/^[a-zA-Z0-9]+@+[a-zA-Z]+.+com+$/
			document.writeln("\nFirst name : "+fname)
			document.writeln("\n        Password: "+pword)
			document.writeln("\n        Mobile no: "+mno)
			document.writeln("\n          Email:"+emai)
			if(pword.length < 8)
			{
				alert("password should be more than 8 characters");
			}
			if(!(/[A-Z]/.test(pword)))
			{
				alert("PASSWORD should contain 1 upper case letter");
			}
			if(!(/[!@#$%^&*]/.test(pword)))
			{
				alert("PASSWORD should contain 1 special symbol");
			}
			if(!regexp_pcode.test(pcode))
			{
				alert("postalcode should  contain only numbers");
			} 
			if(pword!=pcword)
			{
				alert("Password doesn't match")
			}
			if(pcode.length != 6)
			{
				alert("pincode should be  6 characters");
			}
			if(!regexp_pcode.test(mno))
			{
				alert("Mobile no. should  contain only numbers");
			}
			if(mno.length != 10)
			{
				alert(" Mobile no.should have only  10 characters");
			}
			if(!(re_exp_ecode).test(emai))
			{
				alert("enter valid email id");
			}
			var doc="name"+fname+" "+password+":"+pword+" Mobile:"+mno+" email:"+emai;
			alert(doc);
		}
