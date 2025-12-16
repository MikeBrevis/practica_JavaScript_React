const person = {
    firstName: 'Mike',
    lastName: 'Brevis',
    age: 45,
    address: {
        postalCode: '20800',
        city: "NY"
    }
}

const batman = structuredClone(person);
batman.firstName = "Bruce";
batman.lastName = "Wayne";
batman.age = 35;
batman.address.city = 'Gothic City'

console.log(person, batman)