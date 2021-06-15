// https://www.codewars.com/kata/5cb7baa989b1c50014a53333/train/javascript

function isSatorSquare(t){
    for(var i=0, n=t.length; i<n; i++) for(var j=0; j<n; j++) if((t[i][j]!=t[j][i])||(t[i][j]!=t[n-i-1][n-j-1])) return false;
    return true;
  }