import Cell from "./components/Cell"
import {useState, useEffect} from "react"


function App() {
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [go, setGo] = useState("circle")
    const [winningMessage, setWinningMessage] = useState(null)

    const message = "It is now ".concat(go).concat("'s go.")

    useEffect(() => {
        checkScore()
    }, [cells])

    const checkScore = () => {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6],
        ]

        winningCombos.forEach( arr => {
            let circleWins = arr.every(cell => cells[cell] === "circle")

            if (circleWins) {
                setWinningMessage("Circle wins!")
                return
            }
        })

        winningCombos.forEach( arr => {
            let crossWins = arr.every(cell => cells[cell] === "cross")

            if (crossWins) {
                setWinningMessage("Cross wins!")
                return
            }
        })
    }

    return (
        <div className="app">
            <div className="gameboard">
                {
                    cells.map((cell, i) =>
                        <Cell
                            key={i}
                            id={i}
                            cell={cell}
                            setCells={setCells}
                            go={go}
                            setGo={setGo}
                            cells={cells}
                            winningMessage={winningMessage}
                        />)
                }
            </div>
            <p>{ winningMessage || message}</p>
        </div>
    );
}

export default App;
