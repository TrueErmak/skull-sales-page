import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const chessSets = [
  {
    id: 1,

    title: 'sales item 1',
    images: ['/images/chess1.jpg',
    '/images/chess3-2.jpeg',
    '/images/chess2-1.jpeg'
  ],
    videos: [ ],
    description: 'Description of Chess Set 1...',
  },
  {
    id: 2,
    title: 'sales item 2',
    images: [
      '/images/starWarsSet.jpg',
      '/images/starwars wheel 1.jpg',
      '/images/starwars wheel 3.jpg',
      '/images/starwars wheel 5.jpg',
      '/images/starwars wheel 6.jpg'
    ],
    videos: [
      '/videos/palpatienOnEnder.mp4', // Add the video here
    ],
    description: 'Description of Star Wars Chess Set...',
  },
  {
    id: 3,
    title: 'sales item 3',
    images: ['/images/chees 3.jpg',],
    videos: [ ],
    description: 'This is a green and blue chess set. The pieces are nice to show off here.',
  }

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
