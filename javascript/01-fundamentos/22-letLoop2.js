const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// Aí da certo
funcs[2]()
funcs[8]()