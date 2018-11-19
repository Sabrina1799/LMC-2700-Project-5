import React from "react";
import ReactDOM from "react-dom";
import MIDISounds from "midi-sounds-react";

import "../src/styles.css";

class Game extends React.Component {
  // Feel free to change sounds at
  //https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example3/build/

  PlaySound1() {
    // 19) Bright Acoustic Piano: Piano
    this.midiSounds.playChordNow(19, [80], 2);
  }
  PlaySound2() {
    // 270) Acoustic Guitar (steel): Guitar
    this.midiSounds.playChordNow(270, [80], 2);
  }
  PlaySound3() {
    // 468) Cello: Strings
    this.midiSounds.playChordNow(468, [65], 2);
  }
  PlaySound4() {
    // 776) Flute: Pipe
    this.midiSounds.playChordNow(776, [90], 2);
  }
  PlaySound5() {
    // 762) Piccolo: Pipe
    this.midiSounds.playChordNow(762, [75], 2);
  }
  PlaySound6() {
    // 455) Violin: Strings
    this.midiSounds.playChordNow(455, [80], 2);
  }
  PlaySound7() {
    // 603) Synth Choir: Ensemble
    this.midiSounds.playChordNow(603, [65], 2);
  }
  PlaySound8() {
    // 999) Pad 7 (halo): Synth Pad
    this.midiSounds.playChordNow(999, [80], 2);
  }
  PlaySound9() {
    // 1045) FX3 (crystal) Synth Effects
    this.midiSounds.playChordNow(1045, [55], 2);
  }
  PlaySound10() {
    // 1130) Banjo: Ethnic
    this.midiSounds.playChordNow(1130, [70], 2);
  }
  PlaySound11() {
    // 1155) Koto: Ethnic
    this.midiSounds.playChordNow(1155, [70], 2);
  }
  PlaySound12() {
    // 2) Acoustic Grand Piano: Piano
    this.midiSounds.playChordNow(2, [70], 2);
  }
  PlaySound13() {
    // 8) Acoustic Grand Piano: Piano
    this.midiSounds.playChordNow(8, [60], 2);
  }
  PlaySound14() {
    // 10) Acoustic Grand Piano
    this.midiSounds.playChordNow(10, [60], 2);
  }

  /** Make an array to where each image is placed and play it. */

  render() {
    return (
      <div className="game">
        <div className="title">Music Garden Title</div>
        <div className="help">
          Pick flowers and drag them to your plot to make music.
        </div>
        <div className="plants">
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/5SidedYellow.png?raw=true"
            onClick={() => this.PlaySound1()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedOrange.png?raw=true"
            onClick={() => this.PlaySound2()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/6SidedPurple.png?raw=true"
            onClick={() => this.PlaySound3()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/FancyPink.png?raw=true"
            onClick={() => this.PlaySound4()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenDaisy.png?raw=true"
            onClick={() => this.PlaySound5()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/GreenLoop.png?raw=true"
            onClick={() => this.PlaySound6()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndianPink.png?raw=true"
            onClick={() => this.PlaySound7()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/IndigoRose.png?raw=true"
            onClick={() => this.PlaySound8()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/OrangeSpiral.png?raw=true"
            onClick={() => this.PlaySound9()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/PurpleSpiky.png?raw=true"
            onClick={() => this.PlaySound10()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/RedSpiky.png?raw=true"
            onClick={() => this.PlaySound11()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimpleGreen.png?raw=true"
            onClick={() => this.PlaySound12()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/SimplePink.png?raw=true"
            onClick={() => this.PlaySound13()}
          />
          <img
            src="https://github.com/Sabrina1799/LMC-2700-Project-5/blob/Kat/Flowers/YellowDaisy.png?raw=true"
            onClick={() => this.PlaySound14()}
          />
        </div>
        <div className="plots">
          <table className="plot" id="plot1">
            <caption>First Player</caption>
            <tr>
              <td>Image 1</td>
              <td>Image 2</td>
              <td>Image 3</td>
              <td>Image 4</td>
              <td>Image 5</td>
              <td>Image 6</td>
              <td>Image 7</td>
            </tr>
            <tr>
              <td>Image 1</td>
              <td>Image 2</td>
              <td>Image 3</td>
              <td>Image 4</td>
              <td>Image 5</td>
              <td>Image 6</td>
              <td>Image 7</td>
            </tr>
          </table>
          <table className="plot" id="plot2">
            <caption>Second Player</caption>
            <tr>
              <td>Image 1</td>
              <td>Image 2</td>
              <td>Image 3</td>
              <td>Image 4</td>
              <td>Image 5</td>
              <td>Image 6</td>
              <td>Image 7</td>
            </tr>
            <tr>
              <td>Image 1</td>
              <td>Image 2</td>
              <td>Image 3</td>
              <td>Image 4</td>
              <td>Image 5</td>
              <td>Image 6</td>
              <td>Image 7</td>
            </tr>
          </table>
        </div>
        <div className="footer">
          <button>Play</button>
        </div>
        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="root"
          instruments={[3]}
        />
      </div>
    );
  }
}
ReactDOM.render(<Game />, mountNode);
