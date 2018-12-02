import React, { Component } from 'react';

class Plot extends Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div className="plotContainer">
        <h1>Plot</h1>
        <ol>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
          <li className="plot"></li>
        </ol>
      </div>
    );
  }
}

export default Plot;
