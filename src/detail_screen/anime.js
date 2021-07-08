// ReactJS.
import React from 'react'

// CSS.
import './anime.css'

const initialState = {
  anime: {
    name: 'Kenpuu Denki Berserk',
    image_url: 'https://cdn.myanimelist.net/images/anime/12/18520l.webp',
    episodes: 115,
    author: 'Miura, Kentarou ',
    genres: ['Action', 'Fantasy', 'Horror'],
    published: new Date(Date.now()).toLocaleDateString(),
    rank: '1',
    mean_score: 8.54,
    total_votes: 124582,
    personal_score: '8',
    status: 'Finished',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero justo. Nisi vitae suscipit tellus mauris a diam. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Id semper risus in hendrerit gravida. Enim nec dui nunc mattis enim ut tellus. Rhoncus aenean vel elit scelerisque mauris pellentesque. Bibendum enim facilisis gravida neque convallis. Pretium fusce id velit ut. Arcu non sodales neque sodales ut. Euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero justo. Nisi vitae suscipit tellus mauris a diam. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Id semper risus in hendrerit gravida. Enim nec dui nunc mattis enim ut tellus. Rhoncus aenean vel elit scelerisque mauris pellentesque. Bibendum enim facilisis gravida neque convallis. Pretium fusce id velit ut. Arcu non sodales neque sodales ut. Euismod in pellentesque massa placerat.',
    video_url: 'https://www.youtube.com/watch?v=ocQ6PDiP014'
  },

  shownDialog: false
}

const reducer = (state, action) => {
  if (action === 'ANIME/SHOW_DIALOG') {
    return { ...state, shownDialog: true }

  } else if (action === 'ANIME/HIDE_DIALOG') {
    return { ...state, shownDialog: false }
  }

  return state
}

const Anime = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <>
    <Header />

    <main>
      <section className='paper'>
        <div id='title'>
          <h1>{ state.anime.name }</h1>

          <IconButton icon='star_rate' onClick={ () => console.log('CLICK') } />
        </div>

        <img id='main-image' src={ state.anime.image_url } alt='' />

        <p>Episodes: { state.anime.episodes }</p>
        <p>Author: { state.anime.author }</p>
        <p>Genres: { state.anime.genres.join(', ') }</p>
        <p>Published: { state.anime.published }</p>
      </section>

      <section>
        <div className='paper'>
          <h2>Rank #{ state.anime.rank }</h2>
        </div>

        <div className='paper' id='rating'>
          <div>
            <h2>Score</h2>
            <p>{ state.anime.mean_score }<span>{ state.anime.total_votes } votes</span></p>
          </div>

          <div className='divider'></div>

          <div>
            <h2>Status</h2>
            <p>{ state.anime.status }</p>
          </div>

          <div>
            <h2>Your rate</h2>
            <p>{ state.anime.personal_score }</p>
          </div>

          <div>
            <IconButton icon='edit' onClick={ () => dispatch('ANIME/SHOW_DIALOG') } />
          </div>
        </div>

        <div className='paper' id='description'>
          <h2>Description</h2>
          <p>{ state.anime.description }</p>
        </div>

        <iframe src='https://www.youtube.com/embed/ocQ6PDiP014' title='YouTube video' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
      </section>
    </main>

    <ChangeRateDialog open={ state.shownDialog } onClose={ () => dispatch('ANIME/HIDE_DIALOG') } />
  </>
}

const Header = props => {
  return <header>
    <div></div>
  </header>
}

const ChangeRateDialog = props => {
  return <div className={ props.open ? 'overlay visible' : 'overlay' }>
    <div className='dialog'>
      <h2 style={{ marginBottom: 24 }}>Change anime rate</h2>

      <label htmlFor='status'>Status:</label>
      <select id='status'>
        <option value='Plan to watch'>Plan to watch</option>
        <option value='Finished' defaultValue>Finished</option>
      </select>

      <label htmlFor='rate'>Personal rate:</label>
      <select id='rate'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8' defaultValue>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>

      <div style={{ textAlign: 'right' }}>
        <button style={{ marginRight: 8 }} className='text-button' onClick={ props.onClose }>CANCEL</button>
        <button className='text-button'>CHANGE</button>
      </div>
    </div>
  </div>
}

const IconButton = props => (
  <button className='icon-button' { ...props }><span className='material-icons'>{ props.icon }</span></button>
)

export default Anime;
