const url = 'https://www.poemist.com/api/v1/randompoems'
function loadMyApi(){
    fetch(url).then((response)=>response.json()).then((data)=>console.log(data));

}


function initialize(){
    loadMyApi()
}





initialize()