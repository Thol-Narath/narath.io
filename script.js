document.getElementById('bootstrapForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('nameDisplay').innerText = document.getElementById('name').value;
    document.getElementById('emailDisplay').innerText = document.getElementById('email').value;
    document.getElementById('salaryDisplay').innerText = `$${parseFloat(document.getElementById('salary').value).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    document.getElementById('dateDisplay').innerText = document.getElementById('hireDate').value;
    document.getElementById('alertBox').classList.remove('d-none');


        // Show alert message"
    alert("1.Empname :"+ document.getElementById("nameDisplay").innerText+"\n"+
    "2.Email :"+ document.getElementById("emailDisplay").innerText+"\n"+
    "3.Salary :"+ document.getElementById("salaryDisplay").innerText+"\n"+
    "4.Hiredate :"+ document.getElementById("dateDisplay").innerText 
);
});
function goBack() {
    window.history.back();
}
function hideMessage(){
    document.getElementById("alertBox").classList.add('d-none');
}

