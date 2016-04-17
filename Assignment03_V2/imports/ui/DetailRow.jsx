import React from 'react';

// Single row in the EventDetails view
export default DetailRow = React.createClass({
  render() {
    var itemLabel = this.props.label;
    var itemContent = this.props.content;

    return (
      <td>
        <label className="col-md-3 control-label">
          <div className="pull-right">{itemLabel}</div>
        </label>
        <div className="col-md-9">
            <span className="iItem-txt">
              {itemContent}
            </span>
        </div>
      </td>        
    );
  }
})