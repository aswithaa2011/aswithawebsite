function valid(){
 //Name
    v1=document.getElementById("bx1");
    e1=document.getElementById("er1");
    exp1=/^[a-z A-Z]{3,20}$/;
    if(v1.value=="")
    {
        e1.innerHTML="Enter your name";
        return false;
    }
    else if(exp1.test(v1.value)==false)
    {
        e1.innerText="Invalid name";
        return false;
    }
	else
    {
        e2.innerText="";
    }
		
     //Phone
    v2=document.getElementById("bx2");
    e2=document.getElementById("er2");
    exp2=/^[6-9]{1}[0-9]{9}$/;
    if(v2.value=="")
    {
        e2.innerText="Please enter your phone number";
        v2.focus();
        return false;
    }
    else if(exp2.test(v2.value)==false)
    {
        e2.innerText="Invalid phone number";
        v2.focus();
        return false;
    }
    else
    {
        e2.innerText="";
    }
}