import axios from "axios"

export const fetchProjectAPICallData = async() =>{
    try{
        const data = await axios.get(" https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
        const finalFormattedDataToBeUsed = data.data
        return finalFormattedDataToBeUsed
    }catch(e){
        const errorResponse = {
            error : e
        }
        return errorResponse
    }
    
}