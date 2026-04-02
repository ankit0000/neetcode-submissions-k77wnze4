class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
    people.sort((a,b)=> a-b);
    let i = 0;
    let j = people.length-1;
    let result = 0;
    while(i<=j){
     if(people[i]+people[j] <= limit) {
        i++;
        
     }
     j--;
     result +=1;
    }
    
     return result;
    }
}
