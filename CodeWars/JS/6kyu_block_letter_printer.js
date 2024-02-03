function blockPrint(input){
 
    input = input.trim().toLowerCase().split("")
    let x=""
    
    for(let i=0;i<7;i++){
      input.forEach(m=> x+= alpha.get(m)[i]+" ")
      x= x.trimEnd()+"\n"
    }
   
    return x.trimEnd();
  }

  