import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';
// import ContactList from './ContactList.js';

function App() {
  const getContacts = () => {
    let contactList = [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
    ];
    return contactList;
  };

  const populateContacts = () => {
    return getContacts().map((x) => {
      return (
        <tr key={x.id}>
          <td>
            <img src={x.pictureUrl} alt="" />
          </td>
          <td>{x.name}</td>
          <td>{x.popularity}</td>
        </tr>
      );
    });
  };

  const addToPrev = () => {
    setRandEntry(addRandomContact());
    setPrevRand(randEntry);
  };

  const addRandomContact = () => {
    let rand = Math.floor(Math.random() * (contacts.length - 5) + 5);

    return (
      <tr key={contacts[rand].id}>
        <td>
          <img src={contacts[rand].pictureUrl} alt="" />
        </td>
        <td>{contacts[rand].name}</td>
        <td>{contacts[rand].popularity}</td>
      </tr>
    );
  };
  let [randEntry, setRandEntry] = useState();
  let [prevRand, setPrevRand] = useState();

  const sortByName = () => {};

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {populateContacts()}
          {prevRand}
          {randEntry}
        </tbody>
      </table>
      <button onClick={addToPrev}>Add random celeb</button>
    </div>
  );
}

export default App;
