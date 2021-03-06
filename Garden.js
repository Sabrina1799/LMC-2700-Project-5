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
        	<img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/5SidedYellow.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedOrange.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedPurple.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/FancyPink.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenDaisy.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenLoop.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndianPink.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndigoRose.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/OrangeSpiral.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/PurpleSpiky.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/RedSpiky.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimpleGreen.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimplePink.png?raw=true'/>
            <img ondragstart="drag(event)" draggable="true" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/YellowDaisy.png?raw=true'/>
        </div>
        <div className="plots" ondrop="drop(event)" ondragover="allowDrop(event)">
        	<h6>Gardener One</h6>
        	<table className="plot" id="plot1" ondrop="drop(event)" ondragover="allowDrop(event)">
        	<tr>
          	<td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
        	</tr>
        	<tr>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
        	</tr>
    			</table>
          <h6>Gardener Two</h6>
          <table className="plot" id="plot2">
        	<tr>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
        	</tr>
        	<tr>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
            <td><img ondrop="drop(event)" ondragover="allowDrop(event)" src='https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Plot.png?raw=true'/></td>
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

//Drag and Drop code from 

var count = 0;

function dragAndDrop(imgSRC) {
	var imageName = "flower" + count;
	<img id={imageName} onClick="hideImage(this.id)" src={imgSRC} draggable="true" 		 
	 ondragstart="drag(event)"/>
  count++;
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("img", ev.target.id);
}	

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("img");
	ev.target.appendChild(document.getElementById(data));
}

// function showImage() {
//   var image;
//   image.style.visibility("visible");
//   <script src="https://code.jquery.com/jquery-1.10.2.js"/>
// }

function hideImage(image) {
  image.style.visibility("hidden");
  count--
}