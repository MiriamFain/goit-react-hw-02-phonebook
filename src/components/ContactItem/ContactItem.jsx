import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { BsTrash } from 'react-icons/bs';

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li className={s.item}>
        <p className={s.name}>{this.props.name}</p>
        <p className={s.number}>{this.props.number}</p>
        <button className={s.btn} onClick={this.props.handleDelete}>
          <BsTrash className={s.icon} />
        </button>
      </li>
    );
  }
}
