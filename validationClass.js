class Form{
    constructor(first_name, last_name, email, password, password_confirm, birthday, button ){
        this.firstName = first_name; 
        this.lastName = last_name; 
        this.email = email; 
        this.password = password; 
        this.passwordConfirm = password_confirm; 
        this.birthday = birthday;
        this.button = button;
        this.error = ""; 
    }
    validate(){
        let validate = true; 

        if(this.firstName.value !== ""){
            if(this.firstName.value.match(/\d+/g) !== null){
                this.set_error('Имя не должно содержать цифры');//console.log('Enter correct name');
                this.firstName.classList.add("invalid");
            }
            else 
                this.firstName.classList.remove("invalid");
        }
        if(this.lastName.value !== ""){
            if(this.lastName.value.match(/\d+/g) !== null){
                this.set_error('Фамилия не должна содержать цифры');//console.log('Enter correct name');
                this.lastName.classList.add("invalid");
            }
            else 
                this.lastName.classList.remove("invalid");   
            
        }
        this.password_validate();
        this.age_validate();

        if(this.password_validate() === true && this.age_validate() === true)
            this.button.disabled = false;
        else{
            this.button.disabled = true;
        }
    }


    password_validate(){
        if(this.password.value !== ""){
            this.password.classList.add("invalid");

            if(this.password.value !== this.passwordConfirm.value)
                return this.set_error('Пароли не совпадают');
            if(this.password.value.length < 8)
                return this.set_error('Пароль слишком короткий');
            if(this.password.value.match(/\d+/g) == null)
                return set_error('Пароль должен содержать хотя бы одну цифру');
            if(!(/^.*[a-zA-Z]+.*$/.test(this.password.value))){
                return this.set_error('Пароль должен содержать как прописные, так и строчные буквы'); 
            }
            if(!this.password.value.match(/[^A-Za-z0-9]/) )
                return this.set_error('Пароль должен содержать хотя бы один символ');  
            
            this.password.classList.remove("invalid");
            return true;
        }
        
    }
    age_validate(){
        //console.log("age_validate");
        var currentDate = new Date();
        var birthDate = new Date(this.birthday.value);
        if(this.birthday.value !== ""){
            this.birthday.classList.add("invalid");
                if (isNaN(birthDate) || birthDate > currentDate) {
                    return this.set_error('Дата некорректна');
                }
                if(currentDate.getFullYear() - birthDate.getFullYear() < 18)
                    return this.set_error('Вам должно быть больше 18 лет');
                if(currentDate.getMonth() - birthDate.getMonth() < 0)
                    return this.set_error('Вам должно быть больше 18 лет');
                if(currentDate.getMonth() - birthDate.getMonth() == 0){
                    if(currentDate.getDate() - birthDate.getDate() < 0)
                        return this.set_error('Вам должно быть больше 18 лет');
                }

                this.birthday.classList.remove("invalid");
                return true;
            }
     }
     set_error(error){
        this.error = error;
     }
}
