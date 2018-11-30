import React, { Component } from 'react';

class Plot extends Component {
  componentDidMount() {
    $('.plot').droppable({
      drop: function(ev, ui) {
        console.log('ui.helper[0]: ', ui.helper[0])

        $(ev.target).empty().append(
          $(ui.helper)
            .clone(true)
            .addClass('planted')
            // .attr('id', ui.helper[0].id)
            .attr('style', '')
        );
      }
    });
  }

  render() {
    return (
      <div className="plotContainer">
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
      </div>
    );
  }
}

export default Plot;
