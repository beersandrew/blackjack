import { useState } from "react";

export default function Game({clickAction}){
    const [currentBet, setCurrentBet] = useState(0)
    const [wallet, setWallet] = useState(1000)

    const increaseBet = (amount) => {
        setCurrentBet(currentBet + amount);
        setWallet(wallet - amount);
    }

    return <>

        <div>
            Current Bet: {currentBet}
        </div>
        <div>
            <button onClick={() => console.log('deal')}>Deal</button>
        </div>
        <div>
            <div>
                Wallet Amount: {wallet}
            </div>
            <div> Chips: </div>
            <button onClick={() => increaseBet(1)}>1</button>
            <button onClick={() =>increaseBet(5)}>5</button>
            <button onClick={() =>increaseBet(10)}>10</button>
            <button onClick={() =>increaseBet(25)}>25</button>
            <button onClick={() =>increaseBet(50)}>50</button>
            <button onClick={() =>increaseBet(100)}>100</button>
        </div>
       
    
        <button onClick={clickAction}>Back To Menu</button>
    </>
}