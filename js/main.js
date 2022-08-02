let name1 = "Uwielbiam JavaScript";

let name2 = "Jestem świetnym programistą";


function longerThan(length1, length2) {

    if (length1.length > length2.length) {
        return length1;
    } else if (length2.length > length1.length) {
        return length2;
    } else {
        return "są równe";
    }
}

console.log(longerThan(name1, name2));