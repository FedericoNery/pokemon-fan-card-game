import { useEffect, useState } from "react";

export const useFetch = (params, method) => {
    const [values, setValues] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await method(params)
        setValues(res.data)
        setIsLoading(false)
    }, [])

    return { isLoading, values }
}