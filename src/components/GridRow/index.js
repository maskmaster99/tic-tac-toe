import React from "react";
import GridItem from "../GridItem";
import "./GridRow.css"

class GridIRow extends React.Component{
    
    render(){
        //console.log(this.props.rowIndex  , this.props.row );
        //let  GridItems =  [<GridItem />, <GridItem/> , <GridItem/>];
        return    <div className="grid-list">
            {this.props.row.map( (col , colIndex)=>( <GridItem handleClick={this.props.handleClick} col={col} colIndex = {colIndex} rowIndex={this.props.rowIndex} /> ) )} 
            </div>
        //return this.props.row.map( (col , colIndex)=>( <GridItem col={col} colIndex = {colIndex} /> ) );
        //return <div className="grid-list"> {GridItems} </div>
    }
}

export default GridIRow;