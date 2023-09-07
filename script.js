const hackerMan = async () =>{
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Initialzing Hack Prograam");
        }, 2000);
    })

    let p2 = new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            resolve("Hacking Ayesha's Instagram ");            
        }, 4000);
    },)

    let p3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Username found ayeshahaque02");      
        }, 6000);
        
    },)

    let p4 = new Promise((resolve, reject)=>{
       setTimeout(() => {
        resolve("Connecting to facbook");
       }, 8000); 
    },)

    let iniT = await p1;
    console.log(iniT);
    let insTa = await p2;
    console.log(insTa);
    let userName = await p3;
    console.log(userName);
    let facBook = await p4;
    console.log(facBook); 
    // let p1 = await ("Initialzing Hack Prograam");

}

hackerMan();
