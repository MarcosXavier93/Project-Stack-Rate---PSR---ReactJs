// ReactJS.
import React from 'react'
import { useParams } from 'react-router-dom'

// CSS.
import './anime.css'

const initialState = {
  anime: {
    name: '',
    imageUrl: '',
    episodes: 0,
    type: '',
    genres: [],
    published: null,
    rank: '',
    meanScore: 0,
    votes: 0,
    userScore: 0,
    status: '',
    description: '',
    videoUrl: ''
  },

  shownChangeRatingDialog: false,

  fetching: true,
  error: null
}

const fetchAnimeFromAPIs = async (animeId, dispatch) => {
  const url = `https://api.jikan.moe/v3/anime/${animeId}`

  try {
    const response = await fetch(url)

    if (response) {
      const data = await response.json()

      console.log(data)

      dispatch({ type: 'ANIME/SET_ANIME_DETAILS', anime: data })
    }

  } catch(error) {
    // Show error dialog.
  }
}

const reducer = (state, action) => {
  if (action.type === 'ANIME/SHOW_CHANGE_RATING_DIALOG') {
    return { ...state, shownChangeRatingDialog: true }

  } else if (action.type === 'ANIME/HIDE_CHANGE_RATING_DIALOG') {
    return { ...state, shownChangeRatingDialog: false }

  } else if (action.type === 'ANIME/CHANGE_PERSONAL_RATING') {
    // FIXME: Verificar cálculo da média das notas dos usuários.
    const newAvg = (((state.anime.meanScore * state.anime.votes) - state.anime.userScore) + action.payload.score) / state.anime.votes

    return {
      ...state,

      anime: {
        ...state.anime,

        status: action.payload.status,
        userScore: action.payload.score,

        meanScore: Number(newAvg.toFixed(2))
      }
    }

  } else if (action.type == 'ANIME/SET_ANIME_DETAILS') {
    const date = new Date(action.anime.aired.from)
    const offset = date.getTimezoneOffset() * 60000

    return {
      ...state,

      anime: {
        ...state.anime,

        name: action.anime.title,
        imageUrl: action.anime.image_url,
        episodes: action.anime.episodes,
        type: action.anime.type,
        genres: action.anime.genres.map(x => x.name),
        published: new Date(date.getTime() + offset).toLocaleDateString(),
        rank: action.anime.rank,
        meanScore: action.anime.score,
        votes: action.anime.scored_by,
        userScore: 0,
        status: '-',
        description: action.anime.background,
        videoUrl: action.anime.trailer_url
      }
    }
  }

  return state
}

const Anime = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { id } = useParams()

  React.useEffect(() => fetchAnimeFromAPIs(id, dispatch), [id])

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

        <img src={ state.anime.imageUrl } alt='' />

        <p>Episodes: { state.anime.episodes }</p>
        <p>Type: { state.anime.type }</p>
        <p>Genres: { state.anime.genres.join(', ') }</p>
        <p>Published: { state.anime.published }</p>
      </div>

      <section className='anime-paper' id='anime-rank'>
        <h2>Rank #{ state.anime.rank }</h2>
      </section>

      <section className='anime-paper' id='anime-general-rating'>
        <div>
          <h2>Score</h2>
          <p>{ state.anime.meanScore }<span>{ state.anime.votes } votes</span></p>
        </div>

        <div className='divider' />

        <div><h2>Status</h2><p>{ state.anime.status }</p></div>

        <div><h2>Your rate</h2><p>{ state.anime.userScore }</p></div>

        <IconButton icon='edit' style={{ color: '#FFFFFF' }} onClick={ () => dispatch({ type: 'ANIME/SHOW_CHANGE_RATING_DIALOG' }) } />
      </section>

      <section className='anime-paper' id='anime-description'>
        <h2 style={{ marginBottom: 24 }}>Description</h2>
        <p style={{ maxHeight: 260, overflow: 'scroll' }}>{ state.anime.description }</p>
      </section>

      <section id='anime-video'>
        <iframe src={ state.anime.videoUrl } title='YouTube video' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </section>
    </main>

    <ChangeRatingDialog open={ state.shownChangeRatingDialog } initialState={{ status: state.anime.status, score: state.anime.userScore }} onChangeRating={ handleRatingChange } onClose={ () => dispatch({ type: 'ANIME/HIDE_CHANGE_RATING_DIALOG' }) } />
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
