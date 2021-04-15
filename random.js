let x;
let arr = [];

function generate(min, max) 
    {
        
        x =  Math.floor(Math.random() * (max - min) ) + min;
       
            if(arr.includes(x))
            {
                generate(min,max);
            }
            else{
                arr.unshift(x);
                document.getElementById('result').innerHTML = x;
            }
       
        document.getElementById('length').innerHTML = arr.length;
        document.getElementById('array').innerHTML = arr;
        
        
    }
    