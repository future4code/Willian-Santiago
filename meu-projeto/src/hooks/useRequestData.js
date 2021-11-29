import { useState, useEffect} from "react"
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    
    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })
    }, [url])
    
    return [data]
}
export default useRequestData