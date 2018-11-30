import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MIDISounds from 'midi-sounds-react';

import Plot from './plot';

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

let
  // musicBox = 109,
  marimba = 127,
  // xylophone = 140,
  steelAcoustic = 256,
  instruments = [marimba, steelAcoustic, 19, 270, 468, 776, 762, 455, 603, 999, 1045, 1130, 1155, 2, 8];



let mappings = {
  fiveSidedYellow: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 19, [80], 2);
    else
      this.midiSounds.playChordNow(19, [80], 2);
  },
  sixSidedOrange: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 270, [80], 2);
    else
      this.midiSounds.playChordNow(270, [80], 2);
  },
  sixSidedPurple: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 270, [80], 2);
    else
      this.midiSounds.playChordNow(468, [65], 2);
  },
  fancyPink: function(delay) {
    this.midiSounds.playChordNow(776, [90], 2);
  },
  greenLoop: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 762, [75], 2);
    else
      this.midiSounds.playChordNow(762, [75], 2);
  },
  indianPink: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 455, [80], 2);
    else
      this.midiSounds.playChordNow(455, [80], 2);
  },
  indigoRose: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 603, [65], 2);
    else
      this.midiSounds.playChordNow(603, [65], 2);
  },
  orangeSpiral: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 999, [80], 2);
    else
      this.midiSounds.playChordNow(999, [80], 2);
  },
  purpleSpiky: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 1045, [55], 2);
    else
      this.midiSounds.playChordNow(1045, [55], 2);
  },
  redSpiky: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 1130, [70], 2);
    else
      this.midiSounds.playChordNow(1130, [70], 2);
  },
  simpleGreen: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 1155, [70], 2);
    else
      this.midiSounds.playChordNow(1155, [70], 2);
  },
  simplePink: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 2, [70], 2);
    else
      this.midiSounds.playChordNow(2, [70], 2);
  },
  yellowDaisy: function(delay) {
    if (delay)
      this.midiSounds.playChordAt(delay, 8, [60], 2);
    else
      this.midiSounds.playChordNow(8, [60], 2);
  }
};

class App extends Component {
  playOne(id) {
    mappings[id].call(this);
  }

  playSequence() {
    let self = this;

    $('.planted').each(function(index, elem) {
      let delay = 0;

      let classes = $(elem).attr('class').split(' ');

      classes.forEach(function(c) {
        if (typeof mappings[c] == 'function') {
          (function(d) {
            console.log('using delay: ', d);
            setTimeout(function() {
              mappings[c].call(self);
            }, d);
          }(delay));

          delay += 1000;
        }
      })
    });
  }

  render() {
  	return (
  	  <div className="game">
  	    <div className="title">Music Garden Title</div>
  	    <div className="help">
  	      Pick flowers and drag them to your plot to make music.
  	    </div>
  	    <div className="plants">
  	      <img className="flower fiveSidedYellow" id="fiveSidedYellow" src={fiveSidedYellow} />
  	      <img className="flower sixSidedOrange" id='sixSidedOrange' src={sixSidedOrange} />
  	      <img className="flower sixSidedPurple" id='sixSidedPurple' src={sixSidedPurple} />
  	      <img className="flower fancyPink" id='fancyPink' src={fancyPink} />
  	      <img className="flower greenLoop" id="greenLoop" src={greenLoop} />
  	      <img className="flower indianPink" id="indianPink" src={indianPink} />
  	      <img className="flower indigoRose" id="indigoRose" src={indigoRose} />
  	      <img className="flower orangeSpiral" id="orangeSpiral" src={orangeSpiral} />
  	      <img className="flower purpleSpiky" id="purpleSpiky" src={purpleSpiky} />
  	      <img className="flower redSpiky" id="redSpiky" src={redSpiky} />
  	      <img className="flower simpleGreen" id="simpleGreen" src={simpleGreen} />
  	      <img className="flower simplePink" id="simplePink" src={simplePink} />
  	      <img className="flower yellowDaisy" id="yellowDaisy" src={yellowDaisy} />
  	    </div>
  	    <ol className="plots">
          <li>
            <Plot />
          </li>
          <li>
            <Plot />
          </li>
  	    </ol>
  	    <div className="footer">
  	      <button onClick={this.playSequence.bind(this)}>Play</button>
  	    </div>

        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="mount-node"
          instruments={instruments}
        />
  	  </div>
  	)
  }

  componentDidMount() {
  	$(function() {
      $('.flower').draggable({
        opacity: 0.5,
        helper: 'clone'
      });
    });

    let that = this;
    $('.flower').each(function(index, elem) {
      $(elem).on('click', function() {
        mappings[elem.id].call(that);
      });
    });
  }
}

let mountNode = document.getElementById('mount-node');

ReactDOM.render(<App />, mountNode);
