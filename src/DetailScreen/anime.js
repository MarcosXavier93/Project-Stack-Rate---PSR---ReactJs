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
    mean_score: 8.65,
    votes: 127,
    user_score: 8,
    status: 'Completed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero justo. Nisi vitae suscipit tellus mauris a diam. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Id semper risus in hendrerit gravida. Enim nec dui nunc mattis enim ut tellus. Rhoncus aenean vel elit scelerisque mauris pellentesque. Bibendum enim facilisis gravida neque convallis. Pretium fusce id velit ut. Arcu non sodales neque sodales ut. Euismod in pellentesque massa placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero justo. Nisi vitae suscipit tellus mauris a diam. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Id semper risus in hendrerit gravida. Enim nec dui nunc mattis enim ut tellus. Rhoncus aenean vel elit scelerisque mauris pellentesque. Bibendum enim facilisis gravida neque convallis. Pretium fusce id velit ut. Arcu non sodales neque sodales ut. Euismod in pellentesque massa placerat.',
    video_url: 'https://www.youtube.com/embed/ocQ6PDiP014'
  },

  shownDialog: false
}

const reducer = (state, action) => {
  if (action.type === 'ANIME/SHOW_DIALOG') {
    return { ...state, shownDialog: true }

  } else if (action.type === 'ANIME/HIDE_DIALOG') {
    return { ...state, shownDialog: false }

  } else if (action.type === 'ANIME/CHANGE_PERSONAL_RATING') {
    // FIXME: Verificar cálculo da média das notas dos usuários.
    const new_avg = (((state.anime.mean_score * state.anime.votes) - state.anime.user_score) + action.payload.score) / state.anime.votes

    return {
      ...state,

      anime: {
        ...state.anime,

        status: action.payload.status,
        user_score: action.payload.score,

        mean_score: Number(new_avg.toFixed(2))
      }
    }
  }

  return state
}

const Anime = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const handleRatingChange = (status, score) => {
    dispatch({ type: 'ANIME/CHANGE_PERSONAL_RATING', payload: { status, score } })
  }

  return <>
    <main id='anime-page'>
      <div className='anime-paper' id='anime-info'>
        <div id='anime-title'>
          <h1>{ state.anime.name }</h1>

          <IconButton icon='star_rate' style={{ color: '#FFFFFF' }} onClick={ () => {} } />
        </div>

        <img src={ state.anime.image_url } alt='' />

        <p>Episodes: { state.anime.episodes }</p>
        <p>Author: { state.anime.author }</p>
        <p>Genres: { state.anime.genres.join(', ') }</p>
        <p>Published: { state.anime.published }</p>
      </div>

      <section className='anime-paper' id='anime-rank'>
        <h2>Rank #{ state.anime.rank }</h2>
      </section>

      <section className='anime-paper' id='anime-general-rating'>
        <div>
          <h2>Score</h2>
          <p>{ state.anime.mean_score }<span>{ state.anime.votes } votes</span></p>
        </div>

        <div className='divider' />

        <div><h2>Status</h2><p>{ state.anime.status }</p></div>

        <div><h2>Your rate</h2><p>{ state.anime.user_score }</p></div>

        <IconButton icon='edit' style={{ color: '#FFFFFF' }} onClick={ () => dispatch({ type: 'ANIME/SHOW_DIALOG' }) } />
      </section>

      <section className='anime-paper' id='anime-description'>
        <h2 style={{ marginBottom: 24 }}>Description</h2>
        <p>{ state.anime.description }</p>
      </section>

      <section id='anime-video'>
        <iframe src={ state.anime.video_url } title='YouTube video' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </section>
    </main>

    <ChangeRatingDialog open={ state.shownDialog } initialState={{ status: state.anime.status, score: state.anime.user_score }} onChangeRating={ handleRatingChange } onClose={ () => dispatch({ type: 'ANIME/HIDE_DIALOG' }) } />
  </>
}

const ChangeRatingDialog = props => {
  const [state, setState] = React.useState({ status: '', score: 0 })

  const handleStateChange = (key, value) => { setState({ ...state, [key]: value }) }

  React.useEffect(() => { setState(props.initialState) }, [props.initialState])

  return <div className={ props.open ? 'anime-dialog-overlay visible' : 'anime-dialog-overlay' }>
    <div id='anime-change-rating-dialog'>
      <h2>Change anime rating</h2>

      <label>
        Status:
        <select value={ state.status } onChange={ e => handleStateChange('status', e.target.value) }>
          <option value='Plan to watch'>Plan to watch</option>
          <option value='Watching'>Watching</option>
          <option value='Dropped'>Dropped</option>
          <option value='On-Hold'>On-Hold</option>
          <option value='Completed'>Completed</option>
        </select>
      </label>

      <label>
        Personal score:
        <select value={ state.score } onChange={ e => handleStateChange('score', e.target.value) }>
          <option value={ 1 }>1</option>
          <option value={ 2 }>2</option>
          <option value={ 3 }>3</option>
          <option value={ 4 }>4</option>
          <option value={ 5 }>5</option>
          <option value={ 6 }>6</option>
          <option value={ 7 }>7</option>
          <option value={ 8 }>8</option>
          <option value={ 9 }>9</option>
          <option value={ 10 }>10</option>
        </select>
      </label>

      <div style={{ textAlign: 'right' }}>
        <button style={{ marginRight: 8 }} className='anime-text-button' onClick={ props.onClose }>CANCEL</button>
        <button className='anime-text-button' onClick={ () => { props.onChangeRating(state.status, state.score); props.onClose() } }>CHANGE</button>
      </div>
    </div>
  </div>
}

const IconButton = props => (
  <button className='anime-icon-button' { ...props }><span className='material-icons'>{ props.icon }</span></button>
)

export default Anime
