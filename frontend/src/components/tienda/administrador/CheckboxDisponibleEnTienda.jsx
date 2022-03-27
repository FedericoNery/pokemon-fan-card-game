import { Checkbox } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { tiendaActions } from "../../../redux/reducers/tiendaReducer";

const CheckboxDisponibleEnTienda = ({ value, indice, onChange}) => {
    return (
        <Checkbox
            checked={value}
            onChange={() => onChange(indice)}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
 
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      { onChange: tiendaActions.changeEstadoCartaDisponible }, dispatch
    )
  }
  
  export default compose(
    connect(null, mapDispatchToProps)
  )(CheckboxDisponibleEnTienda)
