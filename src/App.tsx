import { useCallback, useState } from 'react'
import GameField from './components/GameField';
import './App.css'
import End from './components/End';

const words: string[] = ['ужин',
  'улица',
  'соловей',
  'птица',
  'телескоп',
  'майнкрафт',
  'косметика',
  'заяц',
  'небо',
  'больница',
  'магазин']

function App() {
  const [gameState, setGameState] = useState<'Started' | 'Ended' | 'Waiting'>('Waiting');
  const [results, setResults] = useState({
    wins: 0,
    loses: 0
  });
  const [result, setResult] = useState('');
  const [word, setWord] = useState('');

  const fn = () => {
    const random = Math.floor(Math.random() * words.length);
    setGameState('Started');
    setWord(words[random]);
  };

  const end = useCallback((res: any, result: any) => { setGameState('Ended'); setResults(res); setResult(result) }, [])

  return (
    <div id='wrapper'>
      <div className='resultsBox'>
        <div>Угадано: {results.wins}</div>
        <div>Не угадано: {results.loses}</div>
      </div>
      {gameState === 'Waiting' && <button onClick={fn} className='btn'>Начать игру?</button>}
      {gameState === 'Started' && <GameField onEnd={end} res={results} word={word.split('')} />}
      {gameState === 'Ended' && <End result={result} newTry={() => setGameState('Waiting')} />}
    </div>
  )
}

export default App
