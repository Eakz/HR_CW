function check(a:number[], b:number[]):boolean
{
     
    // Stores the size of array a[]
    let M = a.length;
 
    // Stores the size of array b[]
    let N = b.length;
 
    // Pointers
    let p1 = 0, p2 = 0;
 
    // Iterate while p1 < M and p2 < N
    while (p1 < M && p2 < N)
    {
        if (a[p1] < b[p2])
            p1++;
        else if (a[p1] > b[p2])
            p2++;
        else
            return true;
    }
    return false;
}
 
// Function to count the minimum number
// of people required to be teached
function minimumTeachings(N:number, languages:number[][], friendships:number[][]):number
{
     
    // Stores the size of array A[][]
    let m = languages.length;
 
    // Stores the size of array B[][]
    let t = friendships.length;
 
    // Stores all the persons with no
    // common languages with their friends
    let total = new Set();
 
    // Stores count of languages
    let overall = new Map();
 
    // Sort all the languages of
    // a person in ascending order
    for(let i = 0; i < m; i++)
        languages[i].sort((a, b) => a - b);
 
    // Traverse the array B[][]
    for(let i = 0; i < t; i++)
    {
         
        // Check if there is no common
        // language between two friends
        if (!check(languages[friendships[i][0] - 1],
                   languages[friendships[i][1] - 1]))
        {
             
            // Insert the persons in the Set
            total.add(friendships[i][0]);
            total.add(friendships[i][1]);
        }
    }
 
    // Stores the size of the Set
    let s = total.size;
 
    // Stores the count of
    // minimum persons to teach
    let result = s;
 
    // Traverse the set total
    for(let pr of total)
    {
         const p = pr as number;
        // Traverse A[p - 1]
        for(let i = 0; i < languages[p - 1].length; i++)
        {
             
            // Increment count of languages by one
            if (overall.has(languages[p - 1][i]))
            {
                overall.set(languages[p - 1][i],
                overall.get(languages[p - 1][i]) + 1)
            }
            else
            {
                overall.set(languages[p - 1][i], 1)
            }
        }
    }
 
    // Traverse the map
    for(let c of overall)
     
        // Update result
        result = Math.min(result, s - c[1]);
 
    // Return the result
    return result;
}

console.log(
    minimumTeachings(
        2,
        [[1], [2], [1, 2]],
        [
            [1, 2],
            [1, 3],
            [2, 3],
        ],
    ),
    1
);
console.log(
    minimumTeachings(
        3,
        [[2], [1, 3], [1, 2], [3]],
        [
            [1, 4],
            [1, 2],
            [3, 4],
            [2, 3],
        ],
    ),
    2
);

