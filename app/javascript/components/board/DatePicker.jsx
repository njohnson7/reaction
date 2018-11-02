import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/CardActions';

const DatePicker = (props) => {
  return (
    <div>
      <header>
        <span>Change due date</span>
        <a href="#" className="icon-sm icon-close"></a>
      </header>
      <div className="content">
        <form>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Date
                <input type="text" placeholder="Enter date" autoFocus />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Time
                <input type="text" placeholder="Enter time" value="12:00 PM" />
              </label>
            </div>
            <div id="calendar-widget"></div>
          </div>
          <button className="button" type="submit">Save</button>
          <button className="button red-button" type="reset">Remove</button>
        </form>
      </div>
    </div>
  )
}

export default DatePicker;