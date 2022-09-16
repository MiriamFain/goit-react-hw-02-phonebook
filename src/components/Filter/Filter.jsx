import React, { Component } from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

export default class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    const { value, handleFilter } = this.props;

    return (
      <div className={s.filter}>
        <label className={s.label}>
          <BsSearch className={s.icon} /> Search
          <input
            className={s.input}
            value={value}
            name="filter"
            type="text"
            onChange={handleFilter}
            placeholder="Find contact by name"
          />
        </label>
      </div>
    );
  }
}
