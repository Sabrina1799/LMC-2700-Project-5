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
  acousticGrandPiano = 4,
  steelAcoustic = 256,
  celesta = 94,
  glockenspiel = 102,
  musicBox = 109,
  marimba = 127,
  xylophone = 140,

  instruments = [acousticGrandPiano, steelAcoustic, celesta, glockenspiel, musicBox, marimba, xylophone];

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
  constructor() {
    super();
    this.state = {
      playerCount: 1,
      activePlayer: 0,
      players: [{
        plotCount: 2
      }]
    }
  }

  playOne(id) {
    mappings[id].call(this);
  }

  playSequence() {
    let
      self = this,
      instrIndex = 0,
      player = this.state.activePlayer;

    $('#rowNum' + player).find('.plotContainer').each(function(i, el) {
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
        <div className="controls">
          <button onClick={this.playSequence.bind(this)}>Play</button>
          <button onClick={this.addPlot.bind(this)}>Add plot</button>
          <button onClick={this.addPlayer.bind(this)}>Add player</button>
          {(this.state.players.length > 1) &&
            (<button onClick={this.switchPlayer.bind(this)}>Switch to Player {this.nextPlayer() + 1}</button>)
          }
        </div>
  	    <ol id="plots" className="plots">
          {Array(this.state.playerCount).fill(0).map( (v, i) => {
            let
              players = this.state.players,
              active = this.state.activePlayer;

            return (
              <div id={"rowNum" + i} className="player-space">
                <h1>Player {(i + 1)}</h1>
                {Array(players[i].plotCount).fill(1).map(() =>
                  <Plot  />
                )}
              </div>
            )
          })}
  	    </ol>

        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="mount-node"
          instruments={instruments}
        />
  	  </div>
  	)
  }

  addPlot() {
    let
      active = this.state.activePlayer,
      player = this.state.players[active],
      plotCount = player.plotCount;

    if (plotCount <= 5) {
      var
        players = this.state.players,
        newPlayersArr = players.slice();

      newPlayersArr[active].plotCount = plotCount + 1;

      this.setState({
        players: newPlayersArr
      });
    }
  }

  addPlayer() {
    if (this.state.playerCount < 2) {
      var newArr = this.state.players.slice();

      newArr.push({
        plotCount: 2
      });

      this.setState({
        playerCount: this.state.playerCount + 1,
        players: newArr
      });
    }
  }

  nextPlayer() {
    var current = this.state.activePlayer;

    return current == 0 ? 1 : 0;
  }

  switchPlayer() {
    if (this.state.players.length > 1) {
      this.setState({
        activePlayer: this.nextPlayer()
      });
    }
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