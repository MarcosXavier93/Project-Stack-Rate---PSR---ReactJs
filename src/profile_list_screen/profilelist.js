import './profilelist.css';
import { useState, useEffect } from 'react';

const ProfileList = () => {
  const [List_All, SetListAllAnime] = useState([]);
  const [User_Data, SetDataUser] = useState({});

  const getAllUserAnime = async (user) => {
    const Result_Json = await fetch(`https://api.jikan.moe/v3/user/${user}/animelist/watching`).then((response) => response.json());
    SetListAllAnime(Result_Json.anime);
  };

  const getUserData = async (user) => {
    const Result_Json = await fetch(`https://api.jikan.moe/v3/user/${user}`).then((response) => response.json());
    SetDataUser(Result_Json);
  }

  useEffect(() => { 
    getAllUserAnime('Zillaine'); getUserData('Zillaine');
  
    const buttonsEl = document.querySelectorAll('.expand-button');

    for (let button of buttonsEl) {
      button.addEventListener('click', (e) => {
        let content = document.querySelector('.expand-content')
        
        content.classList.toggle('expand-content-show')
      });
    }
  }, []);

  return (
    <body>
      <Header userData={User_Data} />
      <Content list={List_All} />
      <Footer />
    </body>
  );
}

const Header = (props) => {
  return (
    <header>
      <div>
        <div>
          <span className='material-icons icon-header-size'>menu</span>
          <h2>{props.userData.username} Anime List</h2>
        </div>
        <span className='material-icons icon-header-size'>account_circle</span>
      </div>
    </header>
  );
}

const Content = props => {
  return (
    <main>
      <section id='search'>
        <div>
          <label>
            <input type='text' placeholder='Pesquise'></input>
          </label>
          <span className='material-icons'>search</span>
        </div>
      </section>  
      <section>
        { props.list.map((anime, index) =>( 
          <ul>
              <li className='paper' key={index}><ListItem item={anime}/></li>
          </ul>
        ))}
      </section>
      <script src='Menu.js'></script>
    </main>
  );
}

const ListItem = props => {
  return (
    <div>
      <article className='list-card'>
        <div>
          <img src={props.item.image_url} alt={props.item.title} width='200px'/>
        </div>  
        <div className='slice-box-card'>
          <p id='title-card'>{props.item.title}</p>
          <p id='epsode-number-card'>Número de Episódios: {props.item.total_episodes}</p>
          <p id='description-card'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus faucibus, tempus purus sit amet, ultricies nunc. 
            Duis vestibulum sed nisl sit amet rutrum. Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
            venenatis lobortis. Ut elementum a lorem ut suscipit. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat 
            ullamcorper fermentum. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
            Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
          </p>
          <p>Tipo: {props.item.type}</p>

          <div id='ranking-status'>
            <p id='rating'>Rating: {props.item.rating}</p>
            <p id='priority'>Priority: {props.item.priority}</p>
          </div>
        </div>
        
        <div id='user-actions'>
          <span className='material-icons icons-treatment'>star_rate</span>
          <span className='material-icons icons-treatment'>thumb_up</span> 
          <button className='expand-button'><span className='material-icons icons-treatment'>expand_more</span></button>
        </div>
      </article>
      <div className='expand-content'>
         <p id='description-card'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus faucibus, tempus purus sit amet, ultricies nunc. 
            Duis vestibulum sed nisl sit amet rutrum. Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
            venenatis lobortis. Ut elementum a lorem ut suscipit. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat 
            ullamcorper fermentum. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
            Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
          </p>
      </div>
    </div>
  );
} 

const Footer = () => {
  return (
    <footer>
      <div>
      </div>
    </footer>
  );
}

export default ProfileList