import React from "react";
import './App.css';
import GridRow from "../GridRow";
import Header from "../Header"
import Footer from "../Footer"

const operationNum = (num) => {
  return num*num;
}

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      gameState : [["","",""],["","",""],["","",""]],
      PlayerTurn : "X",
      isEnd:false,
    }

  }

  handleClick = (rowIndex , colIndex) =>{
    if(!this.state.isEnd){
      const copiedGameState = [...this.state.gameState];
      copiedGameState[rowIndex][colIndex] = this.state.PlayerTurn;
      this.setState(
        {gameState:copiedGameState,
        PlayerTurn:this.state.PlayerTurn == 'X'?"O":"X",
        isEnd:false,
        }
      )
      var isWin = false;
      
      var arr = [["00","01","02"] , ["10","11","12"] , ["20","21","22"] , 
                 ["00" ,"10","20"] , ["01","11","21"],["02","12","22"] ,
                ["00","11","22"] , ["02","11","20"]];
      for(var i=0;i<arr.length;i++){
        
        var a = this.state.gameState[ Number( arr[i][0].charAt(0) )][ Number( arr[i][0].charAt(1) ) ];
        var b = this.state.gameState[ Number( arr[i][1].charAt(0) )][ Number( arr[i][1].charAt(1) ) ];
        var c = this.state.gameState[ Number( arr[i][2].charAt(0) )][ Number( arr[i][2].charAt(1) ) ];
  
        if(a == "" || b =="" || c == ""){
          continue;
        }
  
        if(a == b && a == c){
          isWin = true;
          break;
        }
  
      }
  
      if(isWin){
        this.setState({
          gameState : copiedGameState,
          PlayerTurn: this.state.PlayerTurn + "Wins",
          isEnd:true,
        });
      }
      else{
        if(!this.state.gameState[0].includes("") && !this.state.gameState[1].includes("") && !this.state.gameState[2].includes("")){
          this.setState({
            gameState:copiedGameState,
            PlayerTurn:"Draw",
            isEnd:true,
          })
        }
      }
    }
  }

  render(){
    return (

      <div className="container">
        <Header/>
        <div id="board"> 
          {
            this.state.gameState.map( (row , rowIndex)=>( <GridRow handleClick={this.handleClick} row={row} rowIndex = {rowIndex}/>) )
          }

        </div>
        <Footer turn={this.state.PlayerTurn} />
        
      </div>
    );
  }

}

export default App;
