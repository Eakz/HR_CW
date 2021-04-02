// https://www.codewars.com/kata/567af2c8b46252f78400004d/train/javascript

function battle(player1, player2) {
    let min= Math.min(player1.length,player2.length);
    const battle = (a,b,players)=>{
        let s1=a[1]-b[0];
        let s2=b[1]-a[0];
        s1>0&&players.player1.push(a);
        s2>0&&players.player2.push(b);
    }
    let result={
        player1:[],
        player2:[]
    }
    for(let i=0;i<min;i++){
        battle(player1[i],player2[i],result)
    }
    result.player1=[...result.player1,...player1.slice(min)]
    result.player2=[...result.player2,...player2.slice(min)]
    return result
  }


 
    let player1, player2, result;
    player1 = [[1,1]]; player2 = [[1,1]];
    result = { 'player1': [], 'player2': [] };
    console.log(battle(player1, player2), result, "Expected 2 empty arrays when all creatures are killed."); 
  
    player1 = [[2,2]]; player2 = [[1,1]];
    result = { 'player1': [[2,2]], 'player2': [] };
    console.log(battle(player1, player2), result, "Expected player2 to have no creatures."); 
  
    player1 = [[1,1]]; player2 = [[2,2]];
    result = { 'player1': [], 'player2': [[2,2]] };
    console.log(battle(player1, player2), result, "Expected player1 to have no creatures."); 
  
    player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
    player2 = [[1, 2], [1, 2], [3, 3]];
    result = { 'player1': [[5,5]], 'player2': [[1,2], [3,3]] };
    console.log(battle(player1, player2), result);
  
    result = { 'player1': [[1,2], [3,3]], 'player2': [[5,5]] };
    console.log(battle(player2, player1), result);
    
    player1 = []; player2 = [[1,1],[2,3],[10,10]];
    result = { 'player1': [], 'player2': [[1,1],[2,3],[10,10]] };
    console.log(battle(player1, player2), result, "Expected output to equal input. Player1 has no creatures."); 

  
  /*
                 Happy Battling!
                  
                  ..:::;;;:::..         
             ..:::::d88888b::;;:::..     
          .:::d88bad8888888::88888b:::. 
        .::d88888888888:?88:888888888b::.  
      .::d8888888888888a:88888888888888b::.
     :::d8888888888888888888888888888888b:::         
    ::::8888?88888888888888888888888888888b::       
   :::ad8??:a888?8888:888888:888888888888888b:     
  .:d8888a888888a:?88:88888?:8888888888888888:.   
  ::)8888888888888a88888888:a8888888888888888b:  
  ::888888888888:???888888888??:::888888888888: 
  ::Y888888888888sss:8888888aaa8888888888888P::
  `::???::::::::::::888888888:::::::::::::::::'
   :::::::::::::::::888888888:::::::::::::::::
    ::::::::::::::::888888888::::::::::::::::
     :::::::::::::::888888888:::::::::::::::
      `:::::::::::::888888888:::::::::::::'
        `:::::::::::888888888::::aa:::::' 
          `::::ad8888888888888888P::::'  
             ``::??Y888888888P??::''    
                  ``:::::::::''
  */