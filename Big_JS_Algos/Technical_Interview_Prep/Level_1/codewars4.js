// DESCRIPTION:
// Americans are odd people: in their buildings, the first floor is actually the ground 
// floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor 
// in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed
// , the numbers move down to take their place. In case of above 13, they move down by 
// two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.



//in euro the 2nd story is called the 1st floor USA
//in usa the 2nd story is 2nd floor euro
//in usa the 1st floor is ground floor in the usa


//function called floorCoversion(americanFloorNumber)
//return the euro floor number

const getRealFloor = (n) => {
    if(n <= 0) {
        return n
    } else if( n >= 13) {
        return n -2
    } else {
        return -1;
    }
}
