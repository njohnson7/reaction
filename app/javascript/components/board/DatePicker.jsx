import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/CardActions';
import Pikaday from 'pikaday';
import moment from 'moment';

class DatePicker extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  state = {
    date: null,
    time: null,
  }

  handleDateInputChanged(e) {
    this.setState({
      date: e.target.value,
    });
  }

  handleTimeInputChanged(e) {
    this.setState({
      time: e.target.value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.context.store.dispatch(
      actions.updateCard(
        this.props.card.id,
        { 
          due_date: this.state.date,
          // time: this.state.time,
        }
      )
    );
  }

  componentDidMount() {
    const picker = new Pikaday({
      field: document.querySelector(".datepicker-select-date input"),
      bound: false,
      container: document.getElementById('calendar-widget'),
      firstDay: 1,
      yearRange: 10,
      defaultDate: moment().add(1, 'day').toDate(),
      setDefaultDate: true,
      format: 'M/D/YYYY',
      i18n: {
        previousMonth : 'Prev',
        nextMonth     : 'Next',
        months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        weekdaysShort : ['Su','Mo','Tu','We','Th','Fr','Sa']
      },
      toString(date, format) {
        return moment(date).format(format);
      }
    });

    picker.show();  
  }

  render() {
    return (
      <div>
        <header>
          <span>Change due date</span>
          <a href="#" className="icon-sm icon-close"></a>
        </header>
        <div className="content">
          <form onSubmit={this.handleFormSubmit}>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input onChange={this.handleDateInputChanged} type="text" placeholder="Enter date" autoFocus />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input onChange={this.handleTimeInputChanged} type="text" placeholder="Enter time" value="12:00 PM" />
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
}

export default DatePicker;