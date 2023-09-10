var arr = []
var originalunsorted = [] //gör en kopia för comparising efter koden har kört
for(let i = 0;i<100;i++){//loopar igenom 100
    let random = Math.round(Math.random()*1000)
arr.push(random)//lägger till en random value från 0,1000 och lägger in den i "arr" arrayn
    originalunsorted.push(random)
}
var sorted = []//har en sorted array
console.log(arr)
while(arr.length>0){//loopar igenom den tills den lägden av arrayn är !> 0
        let lowest = 9e999//här la jag till en stort nummer som ska bara kolla vilket nummer är närmast still den som indikerar vilket nummer är störst
    let lowestindex = null// lowestindex är lägsta nummrets index
        for(let i =0;i<arr.length;i++){//loopar igenom dom övriga numren
        if(arr[i]<lowest){//kollar om nummret är mindre än det gamla lägsta nummret 
            //om det är det så....
            console.log("Lower: "+arr[i] + " <" + " " + lowest) //vill jag visualisera det gamla lägsta nummret och det nya lägsta nummret
            lowest = arr[i]//sätter lägsta nummer variabeln till det nya lägsta nummret i arrayn
            lowestindex = i //sätter lägsta nummerets Index variabeln till det nya lägsta nummrets index 
            console.log(arr)//visualiserar current array
        }else{
            console.log("higher: "+arr[i] + " >" + " " + lowest)//om nummret inte är mindre än det gamla nummret så vill jag ändå se att det är det så vi printar det
            console.log(arr)//och sen printar vi det nuvarande arrayn
        }
    }
    //här kommer det intressanta delen.
    sorted.push(arr[lowestindex])//nu när loopen är klar och alla variablar är updaterade så ska det lägsta nummret i det övriga unsorted array vara assignde till variabelrna
    console.log("Lowest: " + lowest )//visaualiserar vilket nummer var minst
    console.log("Removed: "+  arr.splice(arr.indexOf(lowest),1))//här visar den vilken nummer i arrayn kommer att tas bort med hjälp av "indexOf" methoden i arrayn som kommer att kolla vilken index den lägsta nummret här!


}//Loopas Igenom tills allt är klart!!!!!
console.log("Orginal Array: ")
console.log(originalunsorted )//orginella unsorted array
for(let i = 0;i<3;i++){
    console.log("--------------------------------------")
}
    console.log("--------------------------------------")

console.log("Sorted Array: ")//printar utt
console.log(sorted)
