var r = new XMLHttpRequest();
r.open('GET','https://restcountries.eu/rest/v2/all',true);
r.send();
r.onload = function(){
    var data = JSON.parse(this.response);
    //GETTING ALL THE COUNTRIES FROM ASIA REGION :
    var res1 = data.filter((element1)=> {
        return element1.region == "Asia";
    })
    for(var i in res1){
        console.log(res1[i].name);
    }

    //GETTING ALL THE COUNTRIES POPULATION LESS THAN 2 LACS :

    var res2 = data.filter((element2) => {
        return element2.population < 200000;
    })
    for(var i in res2){
        console.log(res2[i].name + ": " + res2[i].population);
    }

    //GETTING NAME, CAPITAL, FLAG :

    var res3 = data.forEach(element3 => {
        console.log("NAME : " + element3.name," CAPITAL :" + element3.capital," FLAG :" + element3.flag);
    });
    
    //TOTAL POPULATION OF COUNTRIES :
    
    var res4 = data.reduce((pop , element4)=> {
        return +element4.population + pop;
    },0)
    console.log("TOTAL POPULATION :"+ res4);

    //COUNTRIES USES US DOLLARS

    for(var i in data){
        if(data[i].currencies[0].code == "USD"){
            console.log(data[i].name);
        }
    }
}