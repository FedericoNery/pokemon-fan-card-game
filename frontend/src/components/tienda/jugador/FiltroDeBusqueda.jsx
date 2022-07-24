import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete, Box, FormControl, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import { CODIGO_TIPO_CARTA } from '../../../utils/functions';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

const FiltroDeBusqueda = () => {
    const [value, setValue] = React.useState('Disponibles');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    /* const eventHandler = () => {
        // handle the event...
      };
      const debouncedEventHandler = useMemo(
        () => debounce(eventHandler, 300)
      , []);
      const throttledEventHandler = useMemo(
        () => throttle(eventHandler, 300)
      , []); */

    const listaTipos = [
        { label: CODIGO_TIPO_CARTA.AGUA },
        { label: CODIGO_TIPO_CARTA.DRAGON },
        { label: CODIGO_TIPO_CARTA.FAIRY },
        { label: CODIGO_TIPO_CARTA.FUEGO },
        { label: CODIGO_TIPO_CARTA.HIERBA },
        { label: CODIGO_TIPO_CARTA.INCOLORO },
        { label: CODIGO_TIPO_CARTA.LUCHA },
        { label: CODIGO_TIPO_CARTA.METAL },
        { label: CODIGO_TIPO_CARTA.OSCURO },
        { label: CODIGO_TIPO_CARTA.PSIQUICO },
        { label: CODIGO_TIPO_CARTA.RAYO },
        { label: CODIGO_TIPO_CARTA.TIERRA }
    ]

    const listaCantidad = [
        { label: "1" },
        { label: "2" },
        { label: "3" },
        { label: "4" }
    ]

    return (
        <Grid container spacing={2}>
            <Grid item>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
            </Grid>
            <Grid item>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Disponibles" control={<Radio />} label="Disponibles" />
                        <FormControlLabel value="Ofertas" control={<Radio />} label="Ofertas" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={listaTipos}
                    getOptionLabel={(option) => option.label}
                    //defaultValue={null}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Tipo Energia"
                            placeholder="Tipos energias"
                        />
                    )}
                />
            </Grid>
            <Grid item>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={listaCantidad}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Cantidad Energias" />}
                />
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { }, dispatch
    )
}

export default compose(
    connect(null, mapDispatchToProps)
)(FiltroDeBusqueda)
