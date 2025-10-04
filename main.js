/*
    Arrays
        - Create Arrays [Two Methods] new Array() + []
        - Access Arrays Elements
        - Nested Arrays
        - Change Arrays Elements
        - Check For Array Array.isArray(arr);
*/

let myFriends = ["mustafa", "ahmed", ["kamal", "ali"]];
console.log(`Hello ${myFriends}`); // Hello mustafa,ahmed,kamal,ali
console.log(`Hello ${myFriends[0]}.`); // Hello mustafa.
console.log(`Hello ${myFriends[2]}.`);
console.log(myFriends[2][0].toUpperCase());


console.log(myFriends[2]);
console.log(myFriends[2][0]);
console.log(myFriends[2][0][4].toUpperCase());


console.log(myFriends);
myFriends[1] = "fathy";
console.log(myFriends);
myFriends[2] = "hesham";
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));


let myArray = ["ahmed", "fathy", "ali"];
console.log(myArray);
console.log(myArray.length);
myArray[2] = "hesham";
console.log(myArray);
myArray[myArray.length] = "mustafa";
console.log(myArray);

console.log("-------------------------------------");

/*
    Arrays Methods [Adding And Removing]
        - unshift("", "") Add Element To The First
        - push("", "") Add Element To The End
        - shift() Remove First Element From Array
        - pop() Remove Last Element From Array
*/

let myNumber = [10, 20, 30, 40, 50];
console.log(myNumber);

// * Add Element
// 1. using length to add the new element. [last element]
myNumber[myNumber.length] = 60;
console.log(myNumber);
// 2. using index to add the new element. [any place]
myNumber[2] = 100;
console.log(myNumber);
// 3. using push to add the new element. [last element]
myNumber.push(200, 10, 30);
console.log(myNumber);
// 4. using unshift to add the new element. [first element]
myNumber.unshift(-100, -50, -10);
console.log(myNumber);

// * Delete "remove" Element
// 1. using pop to remove the element [last element]
myNumber.pop();
console.log(myNumber);
// 2. using shift to remove the element [first element]
myNumber.shift();
console.log(myNumber);

console.log("-------------------------------------");

/*
    Arrays Methods [Search]
        - indexOf(Search Element, From Index [Opt])
        - lastIndexOf(Search Element, From Index [Opt])
        - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myName = "fathy";
console.log(myName.indexOf("a"));
console.log(myName.indexOf("y", 2));
console.log(myName.lastIndexOf("y"));
console.log(myName.includes("t"));

let student = ["ahmed", "ali", "sara", "fathy", "samar"];
console.log(student);

// 1. using indexOf to search in array (start to end)
console.log(student.indexOf("ali")); // index = 1
console.log(student.indexOf("ali", 2)); // index = -1 not find the result

// 2. using lastIndexOf to search in array to start from end the array (end to start)
console.log(student.lastIndexOf("ali")); // index = 1
console.log(student.lastIndexOf("ali", 2)); // index = 1

// 3. using include to search in array (return boolean value)
console.log(student.includes("ali")); // true
console.log(student.includes("ali", 2)); // false not find the result

console.log("-------------------------------------");

/*
    Arrays Methods [Sort]
        - sort(Function [Opt])
        - reverse
*/

let profit = [10, 30, 80, 90, 70, 100, 852, 147];
console.log(profit);
console.log(profit.sort());
console.log(profit.reverse());

console.log("-------------------------------------");

/*
    Arrays Methods [Slicing]
        - slice(Start [Opt], End [Opt] Not Including End)
            --- slice() => All Array
            --- If Start Is Undefined => 0
            --- Negative Count From End
            --- If End Is Undefined || > Indexes => Slice To The End Array.length
            --- Return New Array
        - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
            --- If Negative => Start From The End
*/

let desc = "Hello In My Website";
console.log(desc.slice(0, 15));

// slice(Start [Opt], End [Opt] Not Including End)
let myFriend = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriend);
console.log(myFriend.slice(2));
console.log(myFriend.slice(2, 5));
console.log(myFriend.slice(-2));
console.log(myFriend.slice(1, -2));
console.log(myFriend.slice(-4, -2));

// splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
myFriend.splice(1, 2, "fathy", "hesham");
console.log(myFriend);

console.log("-------------------------------------");

/*
    Arrays Methods [Joining]
        - concat(array, array) => Return A New Array
        - join(Separator)
*/

let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriend.concat(myNewFriends, schoolFriends, [1, 2, 3, 4, 5], true, false);

console.log(allFriends);
console.log(allFriends.join()); // convert this array to string.
console.log(allFriends.join("-"));
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" | "));
console.log(allFriends.join(" | ").toUpperCase());
