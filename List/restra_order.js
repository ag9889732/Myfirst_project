let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let totalOrder=parseInt(readLine())
let totaltable=parseInt(readLine())
let order=[]
let bill=[]
for(let i=0; i<totalOrder;i++){
    order.push(parseInt(readLine()))
}
for(let i=0; i<totalOrder; i++){
    bill.push(parseInt(readLine()))
}
let arr=[]
for(let i=0; i<totalOrder; i++){
    let p=order[i]
    let sum=0;
    for(let j=i; j<totalOrder; j++){
        if(p===order[j]){
            sum=sum+bill[j]
            bill[j]=0
        }
    }
    arr.push(sum)
    //console.log(arr)
}
//console.log(arr)
let count=[]
let max=arr[0]
for(let i=1; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
}
//console.log(max)
for(let i=0; i<arr.length; i++){
    if(max===arr[i]){
        count.push(i)
    }
}
for(let i=0; i<count.length;i++){
    console.log(order[count[i]])
}
