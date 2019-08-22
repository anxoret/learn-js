function User() {

    let firstName, 
    surname;

    this.setFirstName = function(name) {
        firstName = name;
    };

    this.setSurname = function(name) {
        surname = name;
    };

    this.getFullName = function() {
        return firstName + " " + surname;
    }

};
  
let user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов