// Write your solution in this file!
var customerName = 'bob'


//Returns the name in uppercase
function upperCaseCustomerName() {
     customerName = customerName.toUpperCase()

}

//declares bestcustomer to be not bob
function setBestCustomer() {
     bestCustomer = 'not bob'


}
//Declaring another function overwrites that before it
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Ronaldo'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Dyes'
}
//It is not possible to change const variables
//not possible to change global scopes from inside a function scope