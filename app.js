import React from 'react';
import ReactDOM from 'react-dom';

import fiveSidedYellow from './images/5SidedYellow.png';
import sixSidedOrange from "./images/6SidedOrange.png";
import sixSidedPurple from "./images/6SidedPurple.png";
import fancyPink from "./images/FancyPink.png";
import greenLoop from "./images/GreenLoop.png";
import indianPink from  "./images/IndianPink.png"
import indigoRose from "./images/IndigoRose.png";
import orangeSpiral from "./images/OrangeSpiral.png";
import purpleSpiky from "./images/PurpleSpiky.png";
import redSpiky from "./images/RedSpiky.png";
import simpleGreen from "./images/SimpleGreen.png";
import simplePink from "./images/SimplePink.png";
import yellowDaisy from './images/YellowDaisy.png';

class App extends React.Component {
  render() {
  	return (
  	  <div className="game">
	    <div className="title">Music Garden Title</div>
	    <div className="help">
	      Pick flowers and drag them to your plot to make music.
	    </div>
	    <div className="plants">
	      <img className="flower" src={fiveSidedYellow} />
	      <img className="flower" src={sixSidedOrange} />
	      <img className="flower" src={sixSidedPurple} />
	      <img className="flower" src={fancyPink} />
	      <img className="flower" src={greenLoop} />
	      <img className="flower" src={indianPink} />
	      <img className="flower" src={indigoRose} />
	      <img className="flower" src={orangeSpiral} />
	      <img className="flower" src={purpleSpiky} />
	      <img className="flower" src={redSpiky} />
	      <img className="flower" src={simpleGreen} />
	      <img className="flower" src={simplePink} />
	      <img className="flower" src={yellowDaisy} />
	    </div>
	    <div className="plots">
	      <div className="plotContainer" id="plot1">
	        <h1>First Player</h1>
	        <ol>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	        </ol>
	        <ol>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	        </ol>
	      </div>
	      <div className="plotContainer" id="plot2">
	        <h1>Second Player</h1>
	        <ul>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	        </ul>
	        <ul>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	          <li className="plot"></li>
	        </ul>
	      </div>
	    </div>
	    <div className="footer">
	      <button>Play</button>
	    </div>
	  </div>
  	)
  }

  componentDidMount() {
  	$(function() {
      $('.flower').draggable({
        opacity: 0.5,
        helper: 'clone',
        revert: 'invalid'
      });

      $('.plot').droppable({
        drop: function(ev, ui) {
          $(ev.target).empty().append(
            $(ui.helper)
              .clone(true)
              .addClass('planted')
              .attr('style', '')
          );
        }
      });
    });
  }
}

let mountNode = document.getElementById('mount-node');

ReactDOM.render(<App />, mountNode);