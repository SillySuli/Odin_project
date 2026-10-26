const findTheOldest = function(ppl) {
    
    return ppl.reduce( (curOldest, person) => {
        if ( person.yearOfDeath == undefined){
            person.yearOfDeath = new Date().getFullYear();
        }
        
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = curOldest.yearOfDeath - curOldest.yearOfBirth;

        if( age > oldestAge ) return person;

        return curOldest;
        }, ppl[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
