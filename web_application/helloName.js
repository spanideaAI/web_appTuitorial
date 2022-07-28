// function myFunction(){
//     let Number1 = document.querySelector("#Number1");
//     let Number2 = document.querySelector("#Number2");

//     let message = document.querySelector("#Number2");
//     message.innerHTML = Number1.value + Number2.value ;

// }

function myFunction() {
    const Number1 = document.getElementById("Number1").value;
    const Number2 = document.getElementById("Number2").value;
    //console.log(Number1)
    message.innerHTML = "The numbers are" + " " + parseInt(Number1) + " and " +  parseInt(Number2);

    endpoint = "http://localhost:8000/addition"; 
    fetchRes = fetch(endpoint, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                    "number1": Number1 , 
                    "number2": Number2 , 
                    })
                })

    fetchRes.then(res => res.json()).then((data) => {
    console.log(data)
    //data = JSON.parse(data)
    
    result = data.result
    let message = document.querySelector("#message");
    message.innerHTML ="The addition of " + " " + parseInt(Number1) + " and " +  parseInt(Number2) +" is <br> <br>" + parseInt(result);
    })
    }