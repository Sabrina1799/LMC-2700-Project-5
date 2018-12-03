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
            .click(function() {
              $(ev.target).empty();
            })
        );
      }
    });
  }

  render() {
    return (
      <div id={this.props.id} className="plotContainer">
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
