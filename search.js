/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left, right
 * and all 4 diagonal directions). This function is case-insensitive in its matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/
module.exports = function search (grid, wordlist) {
//dummy data I used to build this in repl.it
    //     var grid =[['t','a','c','k'], 
//     ['a','u','a','j'], 
//     ['t','g','R','s'],
//     ['c','a','s','q']]

// var words = ['cars', 'tack', 'Cat', 'phil']



//final array of words found in grid
var output = []

//loops through the list of words
for(a=0; a<wordlist.length; a++){

var word = wordlist[a]
var letters = word.toLowerCase().split('')



//loop through the grid checking to see if the first letter of the word can be found, if found, call check
for (i=0; i<grid.length; i++){
    for(j=0; j<grid[i].length; j++) {
    if (grid[i][j].toLowerCase() === letters[0]){
        check(i, j, 1, grid[i][j])
        }

//this function looks around the first letter to check if a second letter matches

        function check(x, y, num, val){
            //fail cases
            if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length){
                return
            }
            //standard case
            if(val){
                check(x+1, y, num)
                check(x+1, y+1, num) 
                check(x+1, y-1, num)
                check(x-1, y, num) 
                check(x-1, y+1, num)
                check(x-1, y-1, num) 
                check(x, y-1, num)
                check(x, y+1, num)
            }
            //if it matches, call proceed
            if(!val && grid[x][y].toLowerCase()===letters[num]){
                proceed( x-(i-x), y-(j-y),(i-x), (j-y), num+1)
            }

//this function is called to continue in the direction determined by the relationship between 
//the first and second letter, checking for matches as it goes
        function proceed(x, y, a, b, num){
            //fail cases
            if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length 
                || num >= letters.length || letters[num] !=grid[x][y].toLowerCase()){
            return
            }
            //successful case
            if(num===letters.length-1 && letters[num] === grid[x][y].toLowerCase()){
            output.push(word)
            return
            }
            //standard case
            if(letters[num] === grid[x][y].toLowerCase()){
            proceed(x-a, y-b, a, b, num+1 )
            }
        }
        }
    }
}

}
return output
}


