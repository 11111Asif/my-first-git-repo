import useCounter from "../../counter";



const Home = () => {

    const { value, handleClick} = useCounter(0)

    return (
        <div>
            <h1>Count: {value}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;