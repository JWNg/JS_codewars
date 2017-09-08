function initArray(matrix){
var zombies = new Array(matrix.length);    
    for (var i = 0; i < matrix.length; i++) {
      zombies[i] = new Array(matrix[i].length);       
      for(var j=0;j<matrix[i].length;j++){
          zombies[i][j]=0;
      }
    }
    return zombies;
}

function findZombies(matrix) {
    var zombies = initArray(matrix)
    var rFindZombies = function(pos,zombies){
        if(matrix[pos.x][pos.y] == matrix[0][0]){
          zombies[pos.x][pos.y] = 1;
          
          if(pos.x+1<matrix.length) rFindZombies({x:pos.x+1,y:pos.y},zombies);
          if(pos.y+1<matrix[pos.x].length) rFindZombies({x:pos.x,y:pos.y+1},zombies);     
          if(pos.x-1>=0 && zombies[pos.x-1][pos.y] == 0) rFindZombies({x:pos.x-1,y:pos.y},zombies);
          if(pos.y-1>=0 && zombies[pos.x][pos.y-1] == 0) rFindZombies({x:pos.x,y:pos.y-1},zombies);
          
        }
        
        return zombies;
    }
    
    return rFindZombies({x:0,y:0},zombies);
}
