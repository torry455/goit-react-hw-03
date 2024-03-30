import './App.css'; 
// import ContactForm from './ContactForm';
// import SearchBox from './SearchBox';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;