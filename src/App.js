import './App.css';
import Header  from './components/Header';
// import Content from './components/Content';
import Footer from './components/Footer';
import ListKeys from './components/ListKeys';
import AddItem from './components/AddItem';
import { useState, useEffect } from 'react';
import SearchItem from './components/SearchItem';
import Square from './components/Square';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [colorValue, setColorValue] = useState('')

  useEffect(() => {
   const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
    } catch (err) {
      console.log(err.stack)
    }
   }

   fetchItems()
  }, [])

 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <ListKeys
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Square 
            colorValue={colorValue}
            setColorValue={setColorValue}/>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
