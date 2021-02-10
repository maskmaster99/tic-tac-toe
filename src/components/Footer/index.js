import React from "react";
import "./Footer.css"

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var text = this.props.turn=='X'||this.props.turn=='O'?this.props.turn+"'s turn":this.props.turn;

        return <div className="turn">{text}</div>;
    }
}

export default Footer;