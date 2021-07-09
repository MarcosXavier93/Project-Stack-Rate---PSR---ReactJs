// ReactJS.
import React from 'react'
import {useState, useEffect } from 'react'

// CSS.
import './profilelist.css'

const initialState = {
  user : {
    name: '' 
  },
  
  profileList: [],
  collapsedList: false
}

const reducer = (state, action) => {
  if (action === 'ANIME/TOGGLE_EXPANSED_LIST') {
    return { ...state, collapsedList: !state.collapsedList }
  } 

  return state
}

const ProfileList = () => {
  const [state] = React.useReducer(reducer, initialState)

  /** API */
  const [request_List_Watching, SetListAllAnime] = useState([])
  const [request_User_Data, SetDataUser] = useState({})
  
  const getAllUserAnime = async (user) => {
    const Result_Json = await fetch(`https://api.jikan.moe/v3/user/${user}/animelist/watching`).then((response) => response.json())
    SetListAllAnime(Result_Json.anime)
  };

  const getUserData = async (user) => {
    const Result_Json = await fetch(`https://api.jikan.moe/v3/user/${user}`).then((response) => response.json())
    SetDataUser(Result_Json)
  }

  useEffect(() => { 
    getAllUserAnime('Zillaine'); getUserData('Zillaine')
  }, [])
  
  /** State - User Data */
  state.user.name = request_User_Data.username
    
  /** State - Profile List */
  state.profileList = request_List_Watching

  return <>
    <Header />
    <Content />
    <Footer />
  </>
}

const Header = props => {
  const [state] = React.useReducer(reducer, initialState)

  return <header>
      <div>
        <div>
          <span className='material-icons icon-header-size'>menu</span>
          <h2>{state.user.name} Anime List</h2>
        </div>
        <span className='material-icons icon-header-size'>account_circle</span>
      </div>
  </header>
}

const Content = props => {
  const [state] = React.useReducer(reducer, initialState)

  return <main>
    <section id='search'>
      <div>
        <label>
          <input type='text' placeholder='Pesquise'></input>
        </label>
        <span className='material-icons'>search</span>
      </div>
    </section>  
    <section>
      { state.profileList.map((anime, index) =>( 
        <ul key={index}>
          <li className='paper'><ListItem item={anime} key={anime.mal_id}/></li>
        </ul>
      ))}
    </section>
  </main>
}

const ListItem = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <article>
    <div className='list-card'>
      <div>
        <img src={props.item.image_url} alt={props.item.title} width='200px'/>
      </div>  
      <div className='slice-box-card'>
        <p id='title-card'>{props.item.title}</p>
        <p id='epsode-number-card'>Número de Episódios: {props.item.total_episodes}</p>
        <p className='description-card'> 
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
        <ArrowButton rotate={ state.collapsedList.toString() } icon='expand_more' onClick={ () => dispatch('ANIME/TOGGLE_EXPANSED_LIST') } />
      </div>
    </div> 
    <ExpansedList open={ state.collapsedList }/>
  </article>
}

const ExpansedList = props => {
  return<div className={ props.open ? 'expand visible' : 'expand' }>
    <div className='expanded-content'>
      <h2>My Review</h2>
      <p className='description-card'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus faucibus, tempus purus sit amet, ultricies nunc. 
        Duis vestibulum sed nisl sit amet rutrum. Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
        venenatis lobortis. Ut elementum a lorem ut suscipit. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat 
        ullamcorper fermentum. Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
        Quisque pharetra id nibh in maximus. Fusce at ipsum augue. Nullam eu quam nec erat ullamcorper fermentum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus faucibus, tempus purus sit amet, ultricies nunc. 
        Duis vestibulum sed nisl sit amet rutrum. Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
        venenatis lobortis. Ut elementum a lorem ut suscipit.Praesent a risus faucibus, tempus purus sit amet, ultricies nunc. 
        Duis vestibulum sed nisl sit amet rutrum. Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
        venenatis lobortis. Ut elementum a lorem ut suscipit.Vivamus nec erat efficitur, pretium tellus eu, scelerisque lectus. Donec sollicitudin 
        venenatis lobortis. Ut elementum a lorem ut suscipit.
      </p>
    </div>
  </div>
}

const ArrowButton = props => (
  <button className={ (props.rotate === 'true') ? 'expand-button rotate' : 'expand-button' } {...props}><span className='material-icons icons-treatment'>{ props.icon }</span></button>
)

const Footer = props => {
  return <footer>
    <div>
    </div>
  </footer>
}

export default ProfileList