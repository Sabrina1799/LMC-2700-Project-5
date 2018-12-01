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
  musicBox = 109,
  marimba = 127,
  xylophone = 140,
  steelAcoustic = 256,
  instruments = [musicBox, marimba, xylophone, steelAcoustic];

let mappings = {
  fiveSidedYellow: function(instr) {
    this.midiSounds.playChordNow(instr, [80], 1);
  },
  sixSidedOrange: function(instr) {
    this.midiSounds.playChordNow(instr, [80], 1);
  },
  sixSidedPurple: function(instr) {
    this.midiSounds.playChordNow(instr, [65], 1);
  },
  fancyPink: function(instr) {
    this.midiSounds.playChordNow(instr, [90], 1);
  },
  greenLoop: function(instr) {
    this.midiSounds.playChordNow(instr, [75], 1);
  },
  indianPink: function(instr) {
    this.midiSounds.playChordNow(instr, [80], 1);
  },
  indigoRose: function(instr) {
    this.midiSounds.playChordNow(instr, [65], 1);
  },
  orangeSpiral: function(instr) {
    this.midiSounds.playChordNow(instr, [80], 1);
  },
  purpleSpiky: function(instr) {
    this.midiSounds.playChordNow(instr, [55], 1);
  },
  redSpiky: function(instr) {
    this.midiSounds.playChordNow(instr, [70], 1);
  },
  simpleGreen: function(instr) {
    this.midiSounds.playChordNow(instr, [70], 1);
  },
  simplePink: function(instr) {
    this.midiSounds.playChordNow(instr, [70], 1);
  },
  yellowDaisy: function(instr) {
    this.midiSounds.playChordNow(instr, [60], 1);
  }
};

class App extends Component {
  playOne(id) {
    mappings[id].call(this);
  }

  playSequence() {
    let
      self = this,
      instrIndex = 0;

    $('.plotContainer').each(function(i, el) {
      (function(instr) {
        let delay = 0;

        $(el).find('.plot').each(function(index, elem) {
          let
            flower = $(elem).find('.planted'),
            parent = $(elem);

          if (flower.length > 0) {
            let classes = flower.attr('class').split(' ');

            classes.forEach(function(c) {
              if (typeof mappings[c] == 'function') {
                (function(d) {
                  setTimeout(function() {
                    parent.addClass('lit-up');
                    mappings[c].call(self, instr);
                    setTimeout(function() {
                      parent.removeClass('lit-up');
                    }, 500);
                  }, d);
                })(delay);
              }
            });
          } else {
            (function(d) {
              setTimeout(function() {
                parent.addClass('lit-up');
                setTimeout(function() {
                  parent.removeClass('lit-up');
                }, 500);
              }, d);
            })(delay);
          }

          delay += 500;
        });
      })(instruments[instrIndex++]);
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

    // let that = this;
    // $('.flower').each(function(index, elem) {
      // $(elem).on('click', function() {
      //   mappings[elem.id].call(that);
      // });
    // });
  }
}

let mountNode = document.getElementById('mount-node');

ReactDOM.render(<App />, mountNode);
