interface EndProps {
    newTry: () => void;
    result: string
}

const End = ({ newTry, result }: EndProps) => {
    return (
        <div className="end">
            <div>Конец - {result}</div>
            <button className="btn" onClick={() => newTry()}>Попробовать снова?</button>
        </div>
    )
}

export default End
