import { useState } from 'react';

const defaultBookList = [
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
];

const BookShelf = () => {
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [books, setBooks] = useState([...defaultBookList]);

  function evtInputChange(evt) {
    const { name, value } = evt.target;
    setNewBook({ ...newBook, [name]: value });
  };

  function evtSubmit(evt) {
    evt.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className='bookshelfDiv'>
      <div className='formDiv'>
        <h3>Add a Book</h3>
        {
          <form onSubmit={evtSubmit}>

            <label htmlFor="title">Title:</label>
            <input type="text" name='title' value={newBook.title} onChange={evtInputChange} />

            <label htmlFor="author">Author:</label>
            <input type="text" name='author' value={newBook.author} onChange={evtInputChange} />

          <button type='submit'>Add</button>
          </form>
        }
      </div>
      <div className='bookCardsDiv'>

        {books.map((el, idx) => (

          <div className='bookCard' key={idx}>
            <h3>{el.title}</h3>
            <p>by {el.author}</p>
          </div>

        ))}

      </div>
    </div>
  );
};

export default BookShelf;
