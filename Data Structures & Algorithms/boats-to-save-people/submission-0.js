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
    while(i<j){
     if(people[i]+people[j] <= limit) {
        result +=1;
        i++;
        j--;
        continue;
     }
     if(people[j]<=limit){
        result +=1;
        j--;
        continue;
     }
     if(people[i]<=limit){
        i++;
        result +=1;
        continue;
     }
     
    }
     
     if(i==j && people[i]<=limit){
         result +=1;
     }
     return result;
    }
}
