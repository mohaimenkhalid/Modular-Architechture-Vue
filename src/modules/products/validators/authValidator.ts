import {helpers, email, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {LoginForm} from "@/modules/products/interfaces/authTypes";

const authValidator = (loginForm: LoginForm) => {
    const rules = {
        username: {
            required: helpers.withMessage("username is required", required),
            email: helpers.withMessage("username must be valid email", email),
            //minLength: minLength(11)
        },
        password: {
            required: helpers.withMessage("Password is required", required),
        }
    }
    const v$ = useVuelidate(rules, loginForm)
    return {v$}
}

export default authValidator;



