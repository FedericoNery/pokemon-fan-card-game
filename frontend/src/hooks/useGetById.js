import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetById = (initialValues, method) => {
    const { id } = useParams();
    const [values, setValues] = useState(initialValues)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await method(id)
        setValues(res.data)
        setIsLoading(false)
    }, [])

    return { isLoading, values }

}

