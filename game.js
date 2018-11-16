class Game extends React.Component {
  render() {
    return (
      <div className="game">
      	<div className="title">
          Music Garden Title
        </div>
        <div className="help">
          Pick flowers and drag them to your plot to make music.
        </div>
        <div className="plants">
        	<img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/5SidedYellow.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedOrange.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedPurple.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/FancyPink.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenDaisy.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenLoop.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndianPink.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndigoRose.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/OrangeSpiral.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/PurpleSpiky.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/RedSpiky.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimpleGreen.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimplePink.png?raw=true'/>
          <img src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/YellowDaisy.png?raw=true'/>
        </div>
        <div className="plots">
        	<table className="plot" id="plot1">
          <caption>First Player</caption>
        	<tr>
            <td>Image 1</td><td>Image 2</td><td>Image 3</td><td>Image 4</td><td>Image 5</td><td>Image 6</td><td>Image 7</td>
        	</tr>
        	<tr>
            <td>Image 1</td><td>Image 2</td><td>Image 3</td><td>Image 4</td><td>Image 5</td><td>Image 6</td><td>Image 7</td>
        	</tr>
    			</table>
          <table className="plot" id="plot2">
          <caption>Second Player</caption>
        	<tr>
            <td>Image 1</td><td>Image 2</td><td>Image 3</td><td>Image 4</td><td>Image 5</td><td>Image 6</td><td>Image 7</td>
        	</tr>
        	<tr>
            <td>Image 1</td><td>Image 2</td><td>Image 3</td><td>Image 4</td><td>Image 5</td><td>Image 6</td><td>Image 7</td>
        	</tr>
    			</table>  
        </div>
        <div className="footer">
          <button>Play</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, mountNode);
