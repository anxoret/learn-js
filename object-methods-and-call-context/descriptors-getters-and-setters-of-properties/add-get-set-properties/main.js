function User(fullName) {

    this.fullName = fullName;

    Object.defineProperties(this, {
    
        firstName: {

            get: function() {
                // let split = this.fullName.split(" ");
                // return split[0];
                // можно всё это уместить в следующей строке:
                return this.fullName.split(" ")[0];
            },

            set: function(newFirstName) {
                // let split = this.fullName.split(" ");
                // split[0] = newFirstName;
                // return split[0];
                // либо коротко:
                return this.fullName = newFirstName + " " + this.lastName;
            }

        },
    
        lastName: {

            get: function() {
                // let split = this.fullName.split(" ");
                // return split[1];
                // можно всё это уместить в следующей строке:
                return this.fullName.split(" ")[1];

            },

            set: function(newLastName) {
                // let split = this.fullName.split(" ");
                // split[1] = newLastName;
                // this.fullName = split.join(" ");
                // либо коротко:
                return this.fullName = this.firstName + " " + newLastName;
            }

        },
        
    });
    
};

let vasya = new User("Василий Жапкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Жапкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров