import { Grid } from '@material-ui/core'
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCartasDelMazoById } from '../core/services/mazos'
import CartaEnergia from './CartaEnergia'
import CartaPokemon from './CartaPokemon'

const CartasDelMazo = () => {
    const { id } = useParams();
    const [cartas, setCartas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        setIsLoading(true)
        const res = await getCartasDelMazoById(id)
        setCartas(res.data)
        setIsLoading(false)
    }, [])

    return (!isLoading && cartas.length > 0) && <Grid container spacing={1}>
        {
            cartas.map(x => {
                const { numero } = x
                if (numero.includes("P")) {
                    return <Grid item xs={6} sm={6} md={4}>
                        <CartaPokemon {...x} />
                    </Grid>
                }
                if (numero.includes("E")) {
                    return <Grid item xs={6} sm={6} md={4}>
                        <CartaEnergia {...x} />
                    </Grid>
                }
                return <></>
            })
        }

    </Grid>
}

export default React.memo(CartasDelMazo);