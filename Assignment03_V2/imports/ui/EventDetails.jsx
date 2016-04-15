import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, Link } from 'react-router';

export default EventDetails = React.createClass({
  render() {

    console.log("Event details props: ",this.props);
    var details = this.props.details;
    var tagString = "";

    for(var tag in details.tags){
      tagString += details.tags[tag];
      if(tag != details.tags.length-1){
        tagString += ", "
      }
    }

    return (
      <table id="ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_mylist" cellspacing="0" border="0" className="singleEventBorder">
        <tbody>
          <tr>
            <td>
              <div className="panel-body">
                <table className="table table-hover" border="0">
                  <tbody>
                    <tr>
                      <td>
                        <label className="col-md-3 control-label">
                          <div className="pull-right">Title :</div>
                        </label>
                        <div className="col-md-9">
                            <span className="iItem-txt">
                              {details.title}
                            </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="col-md-3 control-label">
                          <div className="pull-right">Organizer :</div>
                        </label>
                        <div className="col-md-9">
                          <span className="iItem-txt">
                               {details.organiser}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="col-md-3 control-label">
                          <div className="pull-right">Tags :</div>
                        </label>
                        <div className="col-md-9">
                          <span className="iItem-txt">  
                          {tagString}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="col-md-3 control-label">
                          <div className="pull-right">Description :</div>
                        </label>
                        <div className="col-md-9">
                          <span className="iItem-txt">
                            {details.description}
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Date &amp; Time :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">
                          {details.eventDate}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Venue :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">
                          {details.venue}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Price :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">{details.price}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Agenda :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">{details.agenda}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Contact :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">
                          {details.contact}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="col-md-3 control-label">
                        <div className="pull-right">Hits :</div>
                      </label>
                      <div className="col-md-9">
                        <span className="iItem-txt">{details.hits}</span>
                      </div>
                    </td>
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