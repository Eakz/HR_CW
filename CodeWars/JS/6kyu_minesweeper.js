// https://www.codewars.com/kata/587b2ddb87264729e6000128/train/javascript

const board = inp => {
    if(inp.length!==inp[0].length||!inp.some((e,i)=>{
        if(i===0||i===inp.length-1){
            if(e[0]!=="+"||e[e.length-1]!=="+"){
                return false
            }
        }else{
            if(e[0]!=="|"||e[e.length-1]!=="|"){
                return false
            }
        }
        return true
    })){
        throw Error
    }
    inp=inp.map(e=>e.split(''))
    for(let i=0;i<inp.length-1;i++){
        for(let j=0;j<inp[0].length-1;j++){
            if(inp[i][j]===" "){
                let bigMomma=[...inp[i-1].slice(j-1,j+2),...inp[i].slice(j-1,j+2),...inp[i+1].slice(j-1,j+2)]
                inp[i][j]=bigMomma.filter(e=>e==="*").length||" "
            }

        }
    }
    return inp.map(e=>e.join(''))
  };

      let input =  ["+------+",
                    "| *  * |",
                    "|  *   |",
                    "|    * |",
                    "|   * *|",
                    "| *  * |",
                    "|      |",
                    "+------+"];
      let output = ["+------+",
                    "|1*22*1|",
                    "|12*322|",
                    "| 123*2|",
                    "|112*4*|",
                    "|1*22*2|",
                    "|111111|",
                    "+------+"];
      console.log(board(input), output);
      
    //   input =  ["+-----+",
    //             "| * * |",
    //             "|     |",
    //             "|   * |",
    //             "|  * *|",
    //             "| * * |",
    //             "+-----+"];
    //   output = ["+-----+",
    //             "|1*2*1|",
    //             "|11322|",
    //             "| 12*2|",
    //             "|12*4*|",
    //             "|1*3*2|",
    //             "+-----+"]
    //   console.log(board(input), output);