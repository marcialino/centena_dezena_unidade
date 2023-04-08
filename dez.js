function clicar(){
    var num = Number(window.document.getElementById('num').value)

    var res = window.document.getElementById('res')
    
    /*Transformando o número em uma array*/ 
    n = Array.from(String(num)) 
   
    if (n.length == 3){
        res.innerHTML = `O número <strong>${num}</strong> tem <strong>${n[0]}</strong> centenas, <strong>${n[1]}</strong> dezenas e <strong>${n[2]}</strong> unidades. `
    }if (n.length == 2){
        res.innerHTML = `O número <strong>${num}</strong> tem <strong>${n[0]}</strong> dezenas e <strong>${n[1]}</strong> unidades.`
    }if(n.length == 1){
        res.innerHTML = `O número <strong>${num}</strong> tem <strong>${n[0]}</strong> unidades.`
    }
}