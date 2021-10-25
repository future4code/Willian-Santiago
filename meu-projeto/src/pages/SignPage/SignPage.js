import React from "react"
import SignFormulario from "./SignFormulario"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignPage = () => {
    useUnprotectedPage()
    

    const onSubmitForm = (e) => {
        e.preventDefault()
    }
    return(
        
        <div>
            <SignFormulario />
            
        </div>
            
    )
}
export default SignPage