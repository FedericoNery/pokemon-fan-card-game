import { getMazoById } from "../../core/services/mazos"
import { mazosActions } from "../reducers/mazosReducer"

export const cargarDatosGeneralesMazos = (idsDeLosMazos) => async dispatch => {
    try {
        debugger
        const mazos = Promise.all(idsDeLosMazos.map(async (x) => {
            try {
                const res = await getMazoById(x)
                return res.data
            }
            catch (error) {
                console.log(error)
            }
        })).then((data) => {
            debugger
            dispatch(mazosActions.guardarMazosDatosGenerales(data))
        })
    }
    catch (error) {
        console.log(error)
    }
}