import { useEffect, useState, memo } from "react";
import GameProps from "../types/GameFieldProps"
import GallowsComponent from "./GallowsComponent";

const GameField = memo(({ word, res, onEnd }: GameProps) => {
    const [progress, setProgress] = useState(word.map(() => '*'));
    const [exception, setException] = useState<string[]>([]);
    const [mistake, setMistake] = useState(0);
    // const stars = word.split('').map(() => '*');

    useEffect(() => {
        const fn = (e: any) => {
            if (word.includes(e.key) && !exception.includes(e.key)) {
                console.log(e.key);
                !exception.includes(e.key) && setException([...exception, e.key]);
                // const index = word.indexOf(e.key)
                // const next = [...progress];
                // next[index] = e.key;
                // setProgress([...next])
                setProgress(progress.map((el, ind) => word[ind] == e.key ? e.key : el != '*' ? el : '*'))
            } else if (exception.includes(e.key)) {
                console.log('Уже угадали')
            } else {
                console.log('Неверно')
                setMistake(prev => prev + 1)
            }
        }

        window.addEventListener('keydown', fn);

        return () => window.removeEventListener('keydown', fn)
    }, [progress, exception]);

    useEffect(() => {
        if (progress.join('') === word.join('')) {
            setTimeout(() => onEnd({ ...res, wins: res.wins + 1 }, 'пабида'), 1000)
        };

        if (mistake === 7) {
            setTimeout(() => onEnd({ ...res, loses: res.loses + 1 }, 'проигришь'), 1000)
        }
    }, [progress, exception, mistake])

    return (
        <div className="field">
            <div>
                <div style={{ fontSize: '16px' }}>Угадай это слово</div>
                <div style={{ marginTop: '20px' }}>{progress.join('')}</div>
            </div>
            <GallowsComponent mistakes={mistake} />
        </div>
    )
})

export default GameField
