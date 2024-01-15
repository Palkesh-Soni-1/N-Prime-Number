var search = document.getElementById("search")
search.onclick=function (){
    console.log("clicked")
    var input = document.getElementById("input").value
    console.log(input)
    var a = [];
    if(input<2)
    document.getElementById("demo").innerHTML = "No Prime Number Present";
    else{
        for(let i=2;i<=input;i++)
        {
            let flag = 1;
            for(let j=2;j<i;j++)
            {
                if(i%j==0)
                {flag = 0;}
            }
            if(flag)
            {
                a.push(i);
                // console.log(a);
                // console.log(i);
            }
            // a.push(i);
            // console.log(i);
        }
        console.log(a);
        document.getElementById("demo").innerHTML = a;
    }
}