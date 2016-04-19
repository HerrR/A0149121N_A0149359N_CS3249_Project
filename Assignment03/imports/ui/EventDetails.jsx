import React from 'react';

import DetailRow from './DetailRow.jsx';

// View the details of a single event
export default EventDetails = React.createClass({
  render() {

    let details = this.props.details;
    let evDate = details.eventDate.toDateString() + " " + (details.eventDate.getHours() < 10 ? '0' :'') + details.eventDate.getHours() + ":" + (details.eventDate.getMinutes() < 10 ? '0' :'') + details.eventDate.getMinutes();

    return (
      <table cellspacing="0" border="0" className="singleEventBorder">
        <tbody>
          <tr>
            <td>
              <div className="panel-body">
                <table className="table table-hover" border="0">
                  <tbody>
                    <tr>
                      <DetailRow label={'Title'} content={details.title}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Organizer'} content={details.organiser}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Tags'} content={details.tags}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Description'} content={details.description}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Date & Time'} content={evDate}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Venue'} content={details.venue}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Price'} content={details.price}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Agenda'} content={details.agenda}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Contact'} content={details.contact}/>
                    </tr>
                    <tr>
                      <DetailRow label={'Hits'} content={details.hits}/>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
})