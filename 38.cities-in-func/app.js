"use strict";
//Cities: Write a function called describe city() that accept the name of a city and its country.
//The function should print a simple sentence, such as Karachi in Pakistsn.Give the parameter for the
//country a default value. Call function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Hyderabad");
