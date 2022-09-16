import React, { Component } from 'react';
import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    this.state.contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        Notify.failure(`${contact.name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    let renderContacts = contacts;

    renderContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim())
    );

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <div className={s.form}>
          <ContactForm onSubmit={this.onAddContact} />
        </div>
        <div className={s.contacts}>
          <h2 className={s.title}>Contacts</h2>
          <Filter handleFilter={this.handleFilter} value={filter} />
          <ContactList
            contacts={renderContacts}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
