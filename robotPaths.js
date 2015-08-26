var countPaths = function(grid) {
  /*
   *  With the grid as the input, count the total number of paths from the upper left to bottom right corner.
   *  Extra credit:  can you generalize this to work even if there are obstacles in the way? (obstacles will be represented by 0's)
   *  Extra extra credit:  can you make your solution work for extremely large grids  (say, greater than 100x100?)
   */

  console.log(grid);
  var m = grid.length;
  var n = grid[0].length;

  // return steps(m, n);

  var count = [[m],[n]];

  for (var i = 0; i < m; i++) {
    count[[i],[0]] = 1;
  }

  for (var j = 0; j < n; j++) {
    count[[0],[j]] = 1;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      count[[i],[j]] = count[[i - 1],[j]] + count[[i],[j - 1]];
    }
  }

  // console.log(count);

  return count[[m - 1],[n - 1]];
};

// var steps = function(m,n) {
//   if (m == 1 || n == 1) {
//     return 1;
//   }
//
//   return steps(m - 1, n) + steps(m, n - 1);
// };

// var steps = function(m,n) {
//   var count = [[m],[n]];
//
//   for (var i = 0; i < m; i++) {
//     count[[i],[0]] = 1;
//   }
//
//   for (var j = 0; j < n; j++) {
//     count[[0],[j]] = 1;
//   }
//
//   for (var i = 1; i < m; i++) {
//     for (var j = 1; j < n; j++) {
//       count[[i],[j]] = count[[i - 1],[j]] + count[[i],[j - 1]];
//     }
//   }
//
//   // console.log(count);
//
//   return count[[m - 1],[n - 1]];
// };
