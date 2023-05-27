export default function Menu({clickAction}){


    return <>
        <h1> Welcome to BlackJack!</h1>

        <button onClick={clickAction}> Play </button>
    </>
}