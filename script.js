window.onkeydown = function(keypress) {
    if(keypress.key == "Enter") {
            let input1 = document.getElementById("input1").value
            let input2 = document.getElementById("input2").value
            let input3 = document.getElementById("input3").value
            let input4 = document.getElementById("input4").value
            let input5 = document.getElementById("input5").value
            let input6 = document.getElementById("input6").value
            let input7 = document.getElementById("input7").value
            let input8 = document.getElementById("input8").value
            let input9 = document.getElementById("input9").value
            
            let arr = [
                Number(input1), 
                Number(input2), 
                Number(input3), 
                Number(input4), 
                Number(input5), 
                Number(input6), 
                Number(input7),
                Number(input8),
                Number(input9)
            ]
            
            let sorted = []
            while(arr.length > 0) {
                let lowest = 9e999
                let lowestindex = null
                for(let i = 0; i < arr.length; i++) {
                    if(arr[i] < lowest) {
                        lowest = arr[i]
                        lowestindex = i
                        console.log("lower: " + arr[i] + " <" + " " + lowest)

                    } 
                    else {
                        console.log("higher: " + arr[i] + " >" + " " + lowest)
                        console.log(arr)
                    }
                }
                sorted.push(arr[lowestindex])
                console.log("Lowest: " + lowest)
                console.log("Removed: " + arr.splice(arr.indexOf(lowest), 1))
            }
            console.log(sorted)
            document.getElementById("output1").innerHTML = sorted[0]
            document.getElementById("output2").innerHTML = sorted[1]
            document.getElementById("output3").innerHTML = sorted[2]
            document.getElementById("output4").innerHTML = sorted[3]
            document.getElementById("output5").innerHTML = sorted[4]
            document.getElementById("output6").innerHTML = sorted[5]
            document.getElementById("output7").innerHTML = sorted[6]
            document.getElementById("output8").innerHTML = sorted[7]
            document.getElementById("output9").innerHTML = sorted[8]
    }
}
