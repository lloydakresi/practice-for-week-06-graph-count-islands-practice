function getNeighbors(row, col, matrix) {
  let neighbors = [];
  // Check top
  if (row > 0 && (matrix[row - 1][col] === 1)){
    let top = [row - 1, col];
    neighbors.push(top);
  }

  // Check top right
  if(row > 0 && col < matrix[0].length - 1 && matrix[row - 1][col + 1] === 1){
    let topRight = [row - 1, col + 1];
    neighbors.push(topRight);
  }

  // Check right
  if(col < matrix[0].length - 1 && matrix[row][col + 1] === 1){
    let right = [row , col + 1];
    neighbors.push(right);
  }

  // Check bottom right
  if(row < matrix.length - 1 && col < matrix[0].length - 1 && matrix[row + 1][col + 1] === 1){
    let bottomRight = [row + 1, col + 1];
    neighbors.push(bottomRight);
  }

  // Check bottom
  if(row < matrix.length - 1 && (matrix[row + 1][col] === 1)){
    let bottom = [row + 1, col];
    neighbors.push(bottom);
  }
  // Check bottom left
  if(row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1){
    let bottomLeft = [row + 1, col - 1];
    neighbors.push(bottomLeft);
  }

  // Check left
  if(col > 0 && matrix[row][col - 1] === 1){
    let left = [row, col - 1];
    neighbors.push(left);
  }
  // Check top left
  if(row > 0 && col > 0 && matrix[row - 1][col - 1] === 1){
    let topLeft = [row - 1, col - 1];
    neighbors.push(topLeft);
  }


  // Return neighbors
  return neighbors;

  // Your code here
}






function countIslands(matrix) {

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
  let visited = new Set();
  let count = 0;
  for (let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++){

      if (matrix[row][col] === 1 && !visited.has(String([row,col]))){
        count++;
        let stack = [[row, col]];
        visited.add(String([row, col]))

        while(stack.length > 0){
          let current = stack.pop();
          let neighbors = getNeighbors(current[0], current[1], matrix);

          for(let i = 0; i < neighbors.length; i++){
            let neighbor = neighbors[i];

            if(!visited.has(String(neighbor))){
              stack.push(neighbor);
              visited.add(String(neighbor));
            }

          }
        }
      }
    }
  }
  return count;



}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
