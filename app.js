var search = document.getElementById("search")
search.onclick = function () {
    console.log("clicked")
    var input = document.getElementById("input").value
    console.log(input)
    var a = [];
    if (input < 2)
        document.getElementById("demo").innerHTML = "No Prime Number Present";
    else if (input == 2)
        document.getElementById("demo").innerHTML = "Prime number till 2 is only 2";

    else {
        for (let i = 2; i <= input; i++) {
            let flag = 1;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) { flag = 0; }
            }
            if (flag) {
                a.push(i);
                // console.log(a);
                // console.log(i);
            }
            // a.push(i);
            // console.log(i);
        }
        console.log(a);
        document.getElementById("demo").innerHTML = `Prime Number till ${input} are <div id="array"> ${a} </div>`;
        document.getElementById("array").innerHTML = JSON.stringify(a,null,3);
        // document.getElementById("array").style.color = "red";
    }
}