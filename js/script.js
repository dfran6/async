//x can equal 1 or 0 any other input is invalid
let x=0;
const newPromise= new Promise((resolve, reject)=>{

    if (x==1) {
        resolve("we are live");
    } else if(x==0){
        reject("We are closed");
    }else{
        setTimeout(() => {
            console.log("nothing to see here.."),5000
        }) 
    }
}).then((message)=>{
    console.log( message + " now you can buy what you want")
})
newPromise.catch((message)=>{
    console.log(message + " please come back tomorrow");
})

console.log("welcome to my store");


// async 1


const stuff = async () => {

    const response = await fetch("/js/text.json");
    const data = await response.json();
    return data;
};

stuff().then((data)=>{
    console.log("Resolved: ", data);
    document.body.innerHTML= "Our details: <br>" + JSON.stringify(data);
});

stuff().catch((data)=>{
    document.body.innerHTML="<h1>(404) FILE NOT FOUND </h1>"
})


//async 2



const collect = async () => {

   const response2 = await fetch("/js/text2.json");
   
   if (response2.status !== 200) {
    throw new Error("Cannot find page.. ")
   }

   const data2 = await response2.json();
   return data2;
};

collect().then((data2) => {
    console.log("Succesfull: ", data2);
    document.body.innerHTML= "Our Findings: <br> " + JSON.stringify(data2[2]);
})
.catch((err)=>{
    document.body.innerHTML="<h1> ERROR 404 </h1> <br> " + err.message;
})



//async 3

async function take(url){
    const response3 = await fetch(url);

   if (response3.status !== 200) {
    throw new Error(`<h1> ${response3.status} Page Not Found. </h1>`);
   };

   const data3 =  await response3.json();
   return data3;
}

const link ="/js/text3.json";

take(link)
.then((data3)=>{
    console.log("Approved: ", data3);
    document.body.innerHTML= `Approved: <br> ${JSON.stringify(data3)}`;
})
.catch((err)=>{
    document.body.innerHTML= `There was a problem ${err.message}`;
})