import React from 'react'
import Persons from './Persons'

function MapList() {


let PersonsObj =[{
    Name:'Sharath',
    Age:25,
    Dist:'Mbnr'
},
{
    Name:'Arun',
    Age:29,
    Dist:'sdpt'
},
{
    Name:'Bandi',
    Age:35,
    Dist:'sdpt'
    }]

let PersonsList = PersonsObj.map(personss=><Persons person={personss}></Persons>)



    return (
        <div> {PersonsList}</div>
    )
}

export default MapList
