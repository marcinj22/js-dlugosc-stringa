let name1 = "Uwielbiam JavaScript";

let name2 = "Jestem świetnym programistą";


function longerThan(lenght1, lenght2) {

    if (name1.length > name2.length) {
        return "name1";
    } else if (name2.length > name1.length) {
        return "name2";
    } else {
        "są równe";
    }
}

console.log(longerThan(name1, name2));