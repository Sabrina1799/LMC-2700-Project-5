import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

class Plot extends Component {
  name() {
    return "plot" + this.props.instrument;
  }

  playSound() {
    console.log('playing instr: ', this.props.instrument);
    this.midiSounds.playChordNow(this.props.instrument, [60], 2.5);
  }

  componentDidMount() {
    let that = this;

    $('.plot').droppable({
      drop: function(ev, ui) {
        $(ev.target).empty().append(
          $(ui.helper)
            .clone(true)
            .addClass('planted')
            .attr('style', '')
        );

        that.playSound();
      }
    });
  }

  render() {
    return (
      <div className="plotContainer" id={this.name()}>
        <h1>Player One</h1>
        <ol>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
        </ol>

        <MIDISounds
          ref={ref => (this.midiSounds = ref)}
          appElementName="mount-node"
          instruments={[this.props.instrument]}
        />
      </div>
    );
  }
}

export default Plot;
