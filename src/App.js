import './App.css';
import {useState } from "react";
import MovieList from './components/MovieList';
import {  Navbar,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./components/Search"
import AddMovie from "./components/AddMovie"
import {Link,Routes,Route} from "react-router-dom";
import Nav from "./components/Nav"
import Description from "./components/Description"
function App() {
const [rate, setRate] = useState(1)
const [name, setName] = useState('');
const [movies, setMovies] = useState([
    { 
      id:Math.floor(Math.random() * 100) + 1,
      title: "The walking dead",
      description:"The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home.",
      posterURL:"https://cdn.europosters.eu/image/750/posters/the-walking-dead-city-i15032.jpg", 
      rating:5,
      trailer:"https://youtu.be/sfAc2U20uyg",
    },
    {
      id:Math.floor(Math.random() * 100) + 1,
      title: "How to get away with a murderer ",
      description:"A group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives",
      posterURL:"https://www.hollywoodreporter.com/wp-content/uploads/2015/08/how_to_get_away_with_murder_s02_key_art_poster.jpg", 
      rating:4,
      trailer:"https://youtu.be/dkb-aBaxkVk"
    },
    {
      id:Math.floor(Math.random() * 100) + 1,
      title: "Friends",
      description:"Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      posterURL:"https://fr.web.img5.acsta.net/pictures/21/05/14/08/25/4008276.jpg", 
      rating:4,
      trailer:"https://youtu.be/IEEbUzffzrk"
    },
    { id:Math.floor(Math.random() * 100) + 1,
      title: "The walking dead",
      description:"The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home.",
      posterURL:"https://cdn.europosters.eu/image/750/posters/the-walking-dead-city-i15032.jpg", 
      rating:5,
      trailer:"https://youtu.be/sfAc2U20uyg",
    },
    { 
      id:Math.floor(Math.random() * 100) + 1,
      title: "How to get away with a murderer ",
      description:"A group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives",
      posterURL:"https://www.hollywoodreporter.com/wp-content/uploads/2015/08/how_to_get_away_with_murder_s02_key_art_poster.jpg", 
      rating:4,
      trailer:"https://youtu.be/dkb-aBaxkVk"
    },
    { 
      id:Math.floor(Math.random() * 100) + 1,
      title: "Friends",
      description:"Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      posterURL:"https://fr.web.img5.acsta.net/pictures/21/05/14/08/25/4008276.jpg", 
      rating:4,
      trailer:"https://youtu.be/IEEbUzffzrk"
    }
  ]);
  const getRate=(r)=>{
    setRate(r)
  }
  const Add = (newMovie) => {
    setMovies([...movies, newMovie]);
  }
  return (
    <div>
      
    
      <Navbar bg="dark" >
      <Nav/>
      <div className="container">
            <input type="text" onChange={event => setName(event.target.value)}/>
            <Search getRate={getRate} rate={rate} style={{width:"50px"}}/>
            <AddMovie handleAdd={Add} />
      </div>
      
      </Navbar>
     <Routes>
        <Route path="/" element={<MovieList  movies={movies.filter( element => element.rating>=rate &&element.title.toLowerCase().includes(name.toLowerCase().trim())) }  />} />
        <Route path="/Description/:id" element={<Description movies={movies}/>} />
      </Routes>
      
       </div>
  );
}

export default App;
