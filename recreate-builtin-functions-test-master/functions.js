// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    let lenArray = array.length;
    for (i = 0; i < lenArray; i++) {
        if (item == array[i]){
            return true;
        }
    }
    return false;
}
function indexOf(item, array) {
    let lenArray = array.length;
    for (i = 0; i < lenArray; i++) {
        if (item == array[i]){
            return i;
        }
    }
    return -1;
}
function reverse(array) {
    let lenArray = array.length;
    let newList = [];
    for (i = lenArray-1; i >= 0; i--) {
        newList.push(array[i]);
    }
    return newList;
}
function slice(start, stop, array) {
    let newList = [];
    for (i = start; i < stop; i++) {
        newList.push(array[i]);
    }
    return newList;
}
function concat(array1, array2) {
    let newList = [];
    let lenArray1 = array1.length;
    for (i = 0; i < lenArray1; i++) {
        newList.push(array1[i]);
    }
    let lenArray2 = array2.length;
    for (i = 0; i < lenArray2; i++) {
        newList.push(array2[i]); 
    }
    return newList;
}
function join(conjunction, array) {
    let newString = "";
    let lenArray = array.length;
    for (i = 0; i < lenArray; i++) {
        if (i < lenArray-1) {
            newString += array[i] + conjunction;
        }
        else{
            newString += array[i];
        }
    }
    return newString;
}
function max(array) {
    let lenArray = array.length;
    let largestNum = array[0];
    for (i = 1; i < lenArray; i++) {
        if (largestNum < array[i]) {
            largestNum = array[i];
        }
    }
    return largestNum;
}