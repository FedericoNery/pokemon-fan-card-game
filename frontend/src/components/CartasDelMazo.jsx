import { Grid } from '@material-ui/core'
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCartasDelMazoById } from '../core/services/mazos'
import CartaPokemonDraggeable from './cartas/cartas-draggeables/CartaPokemonDraggeable'
import CartaEnergiaDraggeable from './cartas/cartas-draggeables/CartaEnergiaDraggeable'

const CartasDelMazo = ({cartas}) => {
/*     const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await getCartasDelMazoById(id)
        setCartas(res.data)
        setIsLoading(false)
    }, []) */

    return cartas.length > 0 && <Grid container spacing={1}>
        {
            cartas.map((x, index) => {
                const { numero } = x
                if (numero.includes("P")) {
                    return <Grid item xs={6} sm={6} md={4}>
                        <CartaPokemonDraggeable {...x} index={index} itemObject={{ id: `${numero}cm` }}/>
                        {/* <CartaPokemon {...x} /> */}
                    </Grid>
                }
                if (numero.includes("E")) {
                    return <Grid item xs={6} sm={6} md={4}>
                        <CartaEnergiaDraggeable {...x} index={index} itemObject={{ id: `${numero}cm` }}/>
                        {/* <CartaEnergia {...x} /> */}
                    </Grid>
                }
                return <></>
            })
        }

    </Grid>
}

export default CartasDelMazo;