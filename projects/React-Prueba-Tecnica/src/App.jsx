import './App.css'
import { Movies } from './components/movies'
import withResults from './mocks/results.json'




function App() {
  const movies = withResults.Search




  return (
    <div className='page'>
      <header>
        <h1> Prueba tecnica</h1>
        <form className='form'>
          <input placeholder='Avengers' />
          <button type="submit">Buscar</button>
        </form>
      </header>


      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )


}

export default App
