import { Box, Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import CheckboxDisponibleEnTienda from './CheckboxDisponibleEnTienda';
import CheckboxOfertaEnTienda from './CheckboxOfertaEnTienda';
import ContainerActualizarCartas from './ContainerActualizarCartas';



const TablaCartas = ({ cartas }) => {
    const [pageNumber, setPageNumber] = useState(1)

    const columns = [
        {
            field: 'numero',
            headerName: 'Código',
            width: 70,
            editable: false
        },
        {
            field: 'pokemon',
            headerName: 'Pokemon',
            type: 'number',
            width: 200,
            editable: false
        },
        {
            field: 'disponible_en_tienda',
            headerName: 'Disponible',
            width: 150,
            //editable: true,
            renderCell: ({ value, row }) => {
                return (
                    <CheckboxDisponibleEnTienda
                        value={value}
                        indice={row._id}
                    />
                );
            }
        },
        {
            field: 'oferta_en_tienda',
            headerName: 'En Oferta',
            width: 150,
            //editable: true,
            renderCell: ({ value, row, ...props }) => {
                return (
                    <CheckboxOfertaEnTienda
                        value={value}
                        indice={row._id}
                    />
                );
            }
        },
        {
            field: 'precio',
            headerName: 'Precio',
            width: 150,
            editable: true,
        },

    ]
    return <Container fixed>
        <Typography variant="h3" gutterBottom align='center' sx={{ marginTop: 5 }}>
            Listado de Cartas
        </Typography>
        <div style={{ display: 'flex', height: '80vh' }}>
            <Box sx={{ height: '50vh', width: '100%' }}>
                <DataGrid
                    rows={cartas}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={(row) => row._id}
                    density="compact"
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                //onSelectionModelChange={(selection) => handleSelectionChange(selection)}
                />
                <ContainerActualizarCartas pageNumber={pageNumber} pageSize={10} />
            </Box>
        </div>
    </Container>

}

export default TablaCartas
