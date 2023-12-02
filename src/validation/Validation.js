export const ValidationUserData = (values)=>{
    let errors = {}
    if (values.name.trim() == ''){
        errors.name = "userName is required"
    }else if (values.name.trim().length < 4 ){
        errors.name = "userName must be at least 4 characters"
    }


    if (values.email.trim() == ''){
        errors.email = "Email is required"
    }else if (values.email.trim().length < 10){
        errors.email = "Email must be at least 10 characters"
    }


    if (values.password.trim() == ''){
        errors.password = "password is required"
    }else if (values.password.trim().length < 6){
        errors.password = "password must be at least 6 characters"
    }
   return errors; 
}