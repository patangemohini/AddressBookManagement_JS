console.log("Welcome to address book program !!!!!!");

const firstNameRegex = RegExp('^[A-Z][a-z]{2,}$');
const lastNameRegex = RegExp('^[A-Z][a-z]{2,}$');
const addressRegex = RegExp( '^[a-zA-z]{4,}$' ) ;
const  cityStateRegex  =  RegExp( '^[a-zA-z]{4,}$' ) ;
const zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
const phoneNumberRegex = RegExp('^(91)\\s[0-9]{10}$');
const emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');

class Contact{

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get  firstName ( ) {
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw " first name is Incorrect ";
    }

    set lastName(lastName){
        if  ( lastNameRegex . test ( lastName ) )
            this._lastName = lastName;
        else
            throw " last name is Incorrect ";
    }

    set address(address){
        if (addressRegex.test(address))
            this._address = address;
        else
            throw " Address is Incorrect ";   
    }

    set city(city){
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "**** CITY is Incorrect ****";
    }

    set  state ( state ) {
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw " state is Incorrect ";
    }

    set zip(zip){
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw " zip is Incorrect ";
    }

    set phoneNumber(phoneNumber){
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw " phone number is Incorrect ";
    }

    set email(email){
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "email is incorrect";
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

    let contact = new Contact("Mohini", "Patange", "Latur", "Latur", "Maharastra", "413512", "91 9359492123", "Mohini@gmail.com");
    console.log(contact.toString());