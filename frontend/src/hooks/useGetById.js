import { useEffect, useState } from "react";

export const useGetById = (id, method) => {
    const [values, setValues] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await method(id)
        setValues(res.data)
        setIsLoading(false)
    }, [])

    return { isLoading, values }
}

