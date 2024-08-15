// @ts-nocheck
document.getElementById('jobForm').addEventListener('submit',function(e){
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone=document.getElementById('phone').value;
    let email=document.getElementById('email').value;
    let jobtype=document.getElementById('jobtype').value;
    let jobsource=document.getElementById('jobsource').value;
    let jobdescription=document.getElementById('jobdescription').value;
    let address=document.getElementById('address').value;
    let city=document.getElementById('city').value;
    let state=document.getElementById('state').value;
    let zipcode=document.getElementById('zipcode').value;
    let area=document.getElementById('area').value;
    let date=document.getElementById('date').value;
    let stime=document.getElementById('stime').value;
    let etime=document.getElementById('etime').value;
    let test=document.getElementById('test').value;
});


function saveToPipedrive(firstName,lastName,phone,email,jobtype,jobsource,
jobdescription,address,city,state,zipcode,area,date,stime,etime,test){
    const apiToken ='c87cdd7df9c70f24bde547c2c1b2dbadc458a2fb';
    const dealData={
        title: `Deal with ${firstName} ${lastName}`,
        person_name:`${firstName} ${lastName}`,
        phone:phone,
        email:email,
        jobtype:jobtype,
        jobsource:jobsource,
        jobdescription:jobdescription,
        address:address,
        city:city,
        state:state,
        zipcode:zipcode,
        area:area,
        date:date,
        stime:stime,
        etime:etime,
        test:test,
    };

    fetch(`https://api.pipedrive.com/v1/deals?api_token=${apiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dealData),
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('Deal created successfully!');
        } else {
            alert('Error creating deal!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
