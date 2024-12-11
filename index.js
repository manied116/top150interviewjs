// merge sorted array
function mergeSorted(arr1,len1,arr2,len2){
    for(let j = 0, i = len1; j < len2; j++,i++ ){
        arr1[i] = arr2[j]
    }
    return arr1.sort((a,b) => a-b)
}
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(mergeSorted(nums1,m,nums2,n))

// remove element
function removeElemet(arr,val){
    let result = arr.filter((ele)=> ele !== val)
    return result

}
let removeData = [2,4,3,6,5,1];
 let rmVal = 4
console.log(removeElemet(removeData,rmVal))

// remove duplicate
function removeDuplicate(arr){
    let result = []

    arr.forEach(element => {
       if(!result.includes(element)){
        result.push(element)
       }
    });
    return result
}
let removeDuplicateData = [1,2,4,6,8,3,1,2]

console.log(removeDuplicate(removeDuplicateData))

// change first letter capital
function capitalizeFirstLetter(string) {
    let first = string.charAt(0)
    console.log(first)
    
    return first.toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("apple"));

// bracket related
function isValidBrackets(str) {
    const stack = [];
    const bracketMap = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (let char of str) {
        // console.log(char)
        if (['{', '[', '('].includes(char)) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else if (['}', ']', ')'].includes(char)) {
            // If it's a closing bracket, check the top of the stack
            // console.log(stack)
            // console.log(bracketMap[char])
            if (stack.pop() !== bracketMap[char]) {
                return false; // Invalid if it doesn't match
            }
        }
        // console.log(stack)
    }
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example Usage
const input = "{[]}";
console.log(isValidBrackets(input))