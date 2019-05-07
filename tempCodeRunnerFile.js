 function findShort(s){
  console.log(s.split(' ').sort(function(a,b){return a.length - b.length}));
  }
  console.log(findShort("due to the killing of"));