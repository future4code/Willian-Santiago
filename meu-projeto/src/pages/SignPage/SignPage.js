import React from "react"
import SignFormulario from "./SignFormulario"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    

    const onSubmitForm = (e) => {
        e.preventDefault()
    }
    return(
        
        <div>
            <SignFormulario setRightButtonText={setRightButtonText}/>
            
        </div>
            
    )
}
export default SignPage