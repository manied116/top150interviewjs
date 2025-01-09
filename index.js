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

// split the array based on the size info
function splitData(arr, size) {
    let finalResult = []
  
    for(let index = 0; index<arr.length; index +=size){
      finalResult.push(arr.slice(index,index+size))
    }
    return finalResult;
};

var sizeData = [1,2,3,4,5,6,7,8,9]
var sizeInfo = 2
console.log(splitData(sizeData,sizeInfo))


// find longest sentance
function longestWord(str){
    var stringInfo = str.split(" ")
    
    var longWord   = ""
    console.log(stringInfo)
    stringInfo.forEach(element => {
        if(element.length > longWord.length){
            longWord = element
        }
    });
    return longWord
}

console.log(longestWord("Hi Manikandan, I am Frontent Developer3.10"))

// find palindrome
function checkPalindrome(str){
    // console.log(str)
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
    // console.log(cleanStr)
    let reverseStr = str.split("").reverse().join("")
    // console.log(reverseStr)
    return reverseStr === str
}

console.log(checkPalindrome("racecar"))
console.log(checkPalindrome("vikadakavi"))

// reverse string
function reverseString(str){
    if(str === '') return '';
    return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("interview"))

// factorial
function calculateFactorial(num){
    if(num === 0 || num === 1){
        return 1
    }
    return num * calculateFactorial(num-1)
}
console.log(calculateFactorial(0))

// merge & sort
function mergeAndSort(arr1,arr2){
    let mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays and pick the smaller element
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const mergeArr1 = [1, 3, 5, 7];
const mergeArr2 = [2, 4, 6, 8];
console.log(mergeAndSort(mergeArr1, mergeArr2));

// flatten array
function flattenData(arr){
    let result = [];

    arr.forEach((item)=>{
        if(Array.isArray(item)){
            result = result.concat(flattenData(item))
        }else{
            result.push(item)
        }
    })
    return result
}
console.log(flattenData([2,[1,3,5],[4,6]]))


// remove duplicate object
function removeDuplicateObj(arr){
    return arr.reduce((acc, item) => {
        if (!acc.some(obj => obj["id"] === item["id"])) {
          acc.push(item);
        }
        return acc;
      }, []);
}

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Mike' }
  ];

console.log(removeDuplicateObj(data))

// groupby subject
function groupBySubject(arr) {
    return arr.reduce((acc, item) => {
      // If the subject doesn't exist in the accumulator, add it as an empty array
      if (!acc[item.subject]) {
        acc[item.subject] = [];
      }
      // Push the item to the correct subject group
      acc[item.subject].push(item);
      return acc;
    }, {});
  }
  const groupData = [
    { name: 'John' ,subject:"English"},
    { name: 'Jane' ,subject:"Maths"},
    { name: 'John1' ,subject:"English"},
    { name: 'Mike' ,subject:"Maths"},
    { name: 'Michel' ,subject:"Science"}
  ];
  console.log(groupBySubject(groupData));

//  rotate array with index
function rotateArray(array, index) {
    if (index < 0 || index >= array.length) {
        console.log("Index out of bounds");
    }
    return [...array.slice(index), ...array.slice(0, index)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));
// find 2nd largest
function secondLargest(array) {
    if (array.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    const sortedArray = [...new Set(array)].sort((a, b) => b - a);
    return sortedArray[1];
}

// Example usage
const arr = [5, 3, 9, 7, 9];
console.log(secondLargest(arr)); // Output: 7

// --------------------oops concept -------------------------
// encapsulation
class car{
    constructor(brand,modal){
        this.brand = brand
        this.modal = modal
    }
    
    getBrand(){
        return this.brand
    }
    
    setBrand(newBrand){
        this.brand = newBrand
    }
}

let Car = new car("Toyoto","etios")
console.log(Car.brand)
console.log(Car.getBrand())
Car.setBrand("Corolla")
console.log(Car.getBrand())

// abstraction
class Employee{
    constructor(name, salary) {
    this.name = name;
    let _salary = salary; // Private variable (closure)

    // Private method
    const calculateTax = () => _salary * 0.2;

    this.getNetSalary = () => _salary - calculateTax();
  }
    
    getName(){
        return this.name
    }
}

let employee = new Employee("MK",4000)
console.log(employee.getName())
console.log(employee.getNetSalary())

// inheritance
class Animal{
    constructor(name){
        this.name = name
    }
    
    speak(){
        console.log(`${this.name} is good animal`)
    }
}

class Dog extends Animal{
    
    speak(){
        console.log(`${this.name} sound is low`)
    }
}

let animal = new Animal("Dog")
let dog = new Dog("tiger")
animal.speak()
dog.speak()

// FIZZBUZZ

function fizzbuzz(n){
    for(let i=1; i <=n; i++){
        if(i % 3 ===0 && i % 5 === 0){
            console.log("FIZZBUZZ")
        }else 
        if(i % 3 === 0){
            console.log("FIZZ")
        }else 
        if(i % 5 === 0){
            console.log("BUZZ")
        }else{
            console.log(i)
        }
    }
}

fizzbuzz(10)

// MISSING NUMBER
function missingNumber(nums){
    const n = nums.length;
    const total = (n * (n + 1)) / 2;
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

console.log(missingNumber([4,2,1]))

// build tree data
const treeData = [
    { id: 1, parentId: null, name: "test1" },
    { id: 2, parentId: 1, name: "test2" },
    { id: 3, parentId: 1, name: "test3" },
    { id: 4, parentId: 2, name: "test4" },
    { id: 5, parentId: 2, name: "test5" },
    { id: 6, parentId: 3, name: "test6" },
];

function buildTree(data, parentId = null) {
    return data
        .filter(item => item.parentId === parentId)
        .map(item => ({
            ...item,
            children: buildTree(data, item.id),
        }));
}

const result = buildTree(treeData);
console.log(JSON.stringify(result, null, 2));