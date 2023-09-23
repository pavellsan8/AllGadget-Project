let regisForm = document.getElementById("regis-form");
let errorMsg = document.getElementById("error-text");

function errorText(error) {
    errorMsg.innerHTML = error
}

function validateName(fullname) {
    if(fullname.length >= 5) return true
    else return false
}

function validateEmail(email) {
    if(email.length == 0) return 0

    let checkAdEmail = email.split("@")
    if(checkAdEmail.length != 2) return 1

    if(checkAdEmail[0] == '' || checkAdEmail[1] == '') return 1

    let checkDotEmail = checkAdEmail[1].split(".")
    if(checkDotEmail.length == 1) return 2

    for(let i = 0; i < checkDotEmail.length; i++) {
        if(checkDotEmail[i] == "") return 2
        
    }
    return -1
}

function validatePhoneNum(phnum) {
    if(phnum.length < 3 || phnum.length > 13) return 0
    else return -1
}

function validatePassword(password) {
    if(password.length < 6 || password.length > 20) return 0

    let hasLetter = false
    let hasNumber = false

    for(let i = 0; i < password.length; i++) {
        if(isNaN(password[i])) hasLetter = true
        else hasNumber = true
    }
    if(!hasLetter || !hasNumber) return 1
    return -1
}

function validateGender(gender) {
    for(let i = 0; i < gender.length; i++) {
        if(gender[i].checked) return gender[i]
    }
    return false
}

function validateForm() {
    // validate name
    let regisName = document.getElementById("fullname")
    let nameValid = validateName(regisName.value)
    if(!nameValid) {
        errorText("Failed : Name must be at least 5 characters")
        return
    }

    // validate email 
    let regisEmail = document.getElementById("email")
    let emailValid = validateEmail(regisEmail.value)
    if(emailValid > -1) {
        if(emailValid == 0) {
            errorText("Failed : Email must be filled")
        }
        else if(emailValid == 1) {
            errorText("Failed : Email must contain '@' to valid")
        }
        else if(emailValid == 2) {
            errorText("Failed : Email must contain '.' to valid")
        }
        return
    }

    // validate phone
    let regisPhone = document.getElementById("phonenum")
    let phoneValid = validatePhoneNum(regisPhone.value)
    if(phoneValid > -1) {
        if(phoneValid == 0) {
            errorText("Failed : Phone number must be 4 - 12 numbers")
            return
        }
        return
    }

    // validate password
    let regisPassword = document.getElementById("password")
    let passwordValidation = validatePassword(regisPassword.value)
    if(passwordValidation > -1) {
        if(passwordValidation == 0) {
            errorText("Failed : Password must be 6 - 20 characters")
        }
        else if(passwordValidation == 1) {
            errorText("Failed :Password must be at least 1 letter and 1 number")
        }
        return
    }

    // validate gender
    let genderUser = document.getElementsByName("gender") 
    let genderValid = validateGender(genderUser)
    if(!genderValid) {
        errorText("Failed : Gender must be selected")
        return
    }

    // validate checkbox
    let checkBox = document.getElementById("terms-policy")
    if(!checkBox.checked) {
        errorText("Failed : You must agree to AllGadget terms and policy")
        return
    }

    errorText("")
    alert("Successfully Sign Up Your Account")
    window.location.assign('../HTML/allgadget.html')

    console.log(regisName.value)
    console.log(regisEmail.value)
    console.log(regisPhone.value)
    console.log(genderUser.value)
    console.log(regisPassword.value)
}

regisForm.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})