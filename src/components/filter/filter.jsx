import React from "react";
import f from './filter.mobile.css'
import FilterForm from "./filterForm";


const Filter = (props) => {
    return (
        <FilterForm className={f.common} resetFilter={props.resetFilter} onSubmit={value => {
            if (value.fname === undefined) value.fname = '';
            if (value.lname === undefined) value.lname = '';
            if (value.email === undefined) value.email = '';
            if (value.tel === undefined) value.tel = '';
            props.filter(value);
        }}/>
    )
}
export default Filter;