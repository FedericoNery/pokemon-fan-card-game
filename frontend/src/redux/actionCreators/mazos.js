import { getMazoById } from "../../core/services/mazos"
import { mazosActions } from "../reducers/mazosReducer"

export const cargarDatosGeneralesMazos = (idsDeLosMazos) => async dispatch => {
    try {
        const mazos = Promise.all(idsDeLosMazos.map(async (x) => {
            try {
                const res = await getMazoById(x)
                return res.data
            }
            catch (error) {
            }
        })).then((data) => {
            dispatch(mazosActions.guardarMazosDatosGenerales(data))
        })
    }
    catch (error) {
    }
}
