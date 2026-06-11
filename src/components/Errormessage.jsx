import { AlertCircle } from "lucide-react"

const Errormessage = ({message}) =>{
    return(

        <div className="error-container">
            <AlertCircle className="error-icon"/>
            <p>{message}</p>
        </div>
    )
}
export default Errormessage