const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// Aqui o bagulho buga tudo var bugadasso
funcs[2]()
funcs[8]()
