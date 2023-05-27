export default function Menu(){

    const doSomething = () => {
        console.log("play!");
    }

    return <>
        <h1> Welcome to BlackJack!</h1>

        <button onClick={doSomething}> Play </button>
    </>
}