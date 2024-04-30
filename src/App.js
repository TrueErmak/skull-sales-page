import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const chessSets = [
  {
    id: 1,
    title: 'chess sets',
    salesPageLink: 'https://chess-set-sales-page.vercel.app/',
    description: 'here is the link to my chessets ',
  },
  {
    id: 2,
    title: 'masks',
    salesPageLink: 'https://mask-s-sales-page.vercel.app/',
    description: 'here is the link to my mask page',
  },
  {
    id: 3,
    title: 'new catagory',
    salesPageLink: 'https://your-sales-page-link-3.com',
    description: 'empty',
  },

  {
    id: 4,
    title: 'new catagory',
    salesPageLink: 'https://your-sales-page-link-3.com',
    description: 'empty',
  },

  {
    id: 5,
    title: 'new catagory',
    salesPageLink: 'https://your-sales-page-link-3.com',
    description: 'empty',
  },

  {
    id: 6,
    title: 'new catagory',
    salesPageLink: 'https://your-sales-page-link-3.com',
    description: 'empty',
  },
];

function ChessSet({ id, title, salesPageLink, description }) {
  return (
    <div className="chess-set">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={salesPageLink} target="_blank" rel="noopener noreferrer">
        <button>Visit Sales Page</button>
      </a>
    </div>
  );
}

function App() {
  const aboutMeUrl = "https://eric-canada.vercel.app/";

  return (
    <div className="app">
      {chessSets.map((set) => (
        <ChessSet key={set.id} {...set} />
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href={aboutMeUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            meet the creator 
          </button>
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
