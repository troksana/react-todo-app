import { Loader2 } from "lucide-react"

const LoadingSpinner= () =>{
return(

    <div className="loading-container">
        <Loader2 className="loading-icon"/>
        <p className="loading-text">Loading your tasks...</p>
    </div>
)
}
export default LoadingSpinner