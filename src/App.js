import { supabase } from './supabaseClient';
import logo from './RM_Logo.png';
import './App.css';
import React, { useState } from "react";

function Library() {
  const [MyBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: Books } = await supabase
      .from('Books')
      .select('*')
    setMyBooks(Books);
  }
  getBooks();
  return (
    <table>
    {
      MyBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

function MyInfo() {
  return (
  <>
  <h3>To learn more about me click this link: <a href="https://roaring-semolina-88bf04.netlify.app/">https://roaring-semolina-88bf04.netlify.app/</a></h3>
  </> );
}

const MyLogo = [
  {id: 1, image: logo, width: '250', height: '250'},
]

function MyLogoF() {  
  const MyPic = MyLogo.map(myimage =>
    <>
    <h2>My Logo and Future Brand</h2>
    {myimage.image &&
    <img className="Logo" src= {myimage.image} alt = '' style = {{width: myimage.width, height: myimage.height}}></img>
    }
    </>
  );
  return (
    MyPic
  )
}

const Books = [
  {id: 1, title: 'The Children of Hurin', author: "J.R.R. Tolkein",pagenumber: '320',misOver400Pages: false, image: 'https://upload.wikimedia.org/wikipedia/en/8/85/The_Children_of_Hurin_cover.jpg', width: '260', height: '384' },
  {id: 2, title: 'The Fellowship of The Ring', author: "J.R.R. Tolkein",pagenumber: '423', isOver400Pages: true, image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif', width: '250', height: '419' 	 },
  {id: 3, title: 'The Two Towers', author: "J.R.R. Tolkein", pagenumber: '352', isOver400Pages: false, image: 'https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif', width: '250', height: '419'  },
  {id: 4, title: 'The Return of The King', author: "J.R.R. Tolkein", pagenumber: '416', isOver400Pages: true, image: 'https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif', width: '250', height: '419' }
]


function Display() {
  const BookList = Books.map(book => 
    <>
    <h2>
      {book.title}
    </h2>
    <p>Author: {book.author}</p>
    {book.image &&
    <img className='BookCover' src= {book.image} alt = {book.title + ' cover'} style = {{width: book.width, height: book.height}}></img>
    }
    <p> Page number: <p style={{color: book.isOver400Pages ? 'blue' : 'white'}}>{book.pagenumber}</p></p>

    </>
    );
  return (
    BookList
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyLogoF />
        <MyInfo />
        <h1>My All Time Favorite Books</h1>
        <p>Page number will be blue if the number exceeds 400 pages</p>
        <Display />
        <Library />
        <p>The Source for the images comes from their respective Wikipedia pages</p>
      </header>
    </div>
  );
}

export default App;