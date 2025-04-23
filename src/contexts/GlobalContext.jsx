import { useState, useEffect, createContext, useContext } from "react"
import axios from 'axios'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    // URL
    const baseApiUrl = import.meta.env.VITE_API_URL

    // Categories
    const [categories, setCategories] = useState([])
    // Types
    const [types, setTypes] = useState([])

    const getCategories = () => {
        axios.get(baseApiUrl + '/categories').then(resp => {
            const data = resp.data.data
            setCategories(data)

            // Set Types
            const types = data.flatMap(cat => cat.types)
            setTypes(types)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    const providerValue = { categories, types, baseApiUrl }

    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    )

}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalContextProvider, useGlobalContext }
