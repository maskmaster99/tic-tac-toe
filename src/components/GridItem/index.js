import React from "react";
import "./GridItem.css";

class GridItem extends React.Component{


    render(){
        //console.log(this.props.itemText);
        //console.log(this.props.colIndex , this.props.col);
        return <div className="grid-item"  onClick={()=>{this.props.handleClick(this.props.rowIndex ,this.props.colIndex)}} >{this.props.col}</div>
    }
}

export default GridItem;