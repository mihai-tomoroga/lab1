document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("fullname").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }

		const phone = document.getElementById("phone").value.trim();
        const phonePattern =/^[0-9]{10}$/;

		if (phone !== "" && !phonePattern.test(phone)) {
			alert("Phone number must contain exactly 10 digits");
			e.preventDefault();
			return;
		}

		 const subject = document.getElementById("subject").value;
		 
		 if(!subject){
			 alert("Select a subject");
			e.preventDefault();
			return;
			 
		 }
		 
		 const message = document.getElementById("message").value.trim();
		 
		 if(message===""){
			 alert("Message field cannot be empty");
			e.preventDefault();
			return;
			 
		 }
		 
		 const radiobuttons = document.getElementsByName("hear");

		 
		 let selected=false;
for(let r of radiobuttons){
	if(r.checked) {
		selected=true;
	break;}
	
}
		 
 	if(!selected){
			 alert("Select at least one option from the radio button question");
			e.preventDefault();
			return;
			 
		 }	 
		 
		 const dob =new Date (document.getElementById("dob").value);
         const today =  new Date();
		 let age1= today.getFullYear()-dob.getFullYear();
    const m= today.getMonth()- dob.getMonth();
if(m<0 || (m===0 && today.getDate() <dob.getDate() )){age1--;}
		if (age1<18 ) {
			alert("User should be at least 18 years old");
			e.preventDefault();
			return;
		 }
		 
		 
		 
		 
		 
		 
	     const age = document.getElementById("age").value.trim();
		 
if(age<18 || age>60){
			 alert("Age should be between 18 and 60");
			e.preventDefault();
			return;
			 
		 }
		 
		 
		 const websiteurl = document.getElementById("website").value.trim();
 
		if (!websiteurl.startsWith("https://") ) {
			alert("Website URL must start with https://");
			e.preventDefault();
			return;
		}
		
		const fileInput = document.getElementById("fileUpload");

		if (fileInput.files.length > 0) {
		const file = fileInput.files[0];
		const fileName = file.name.toLowerCase();
    
		if (!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")) {
			alert("Invalid file type! Please upload a .pdf or .docx file.");
			e.preventDefault();
			return;
			}
		const maxSize = 2 * 1024 * 1024; 
		if (file.size > maxSize) {
			alert("File is too large! Maximum size allowed is 2MB.");
			e.preventDefault();
			return;
		}
}

		 const color = document.getElementById("favColor").value;

         if (!color) {
          alert("Please select a favorite color.");
          e.preventDefault();
          return;
          }
		 
		 
		 const finalApproval=confirm("Are you sure you want to submit the form?");
		 
		 if(!finalApproval){
			  
		 e.preventDefault(); 
		 return;}
		 
});
	
