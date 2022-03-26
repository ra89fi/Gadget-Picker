import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Shop></Shop>
            <div>
                <h3>How React works?</h3>
                <p>
                    React uses custom HTML elements in the form of JSX and a
                    virtual DOM to keep track of elements rendered and when a
                    change happens in the virtual DOM, React renders only that
                    part in the actual DOM. That's why it is so performant.
                </p>
                <h3>What is the difference between state and props?</h3>
                <p>
                    State can change, props can't. An element can change its
                    parents state using a passed in handler but it can never
                    change the props it was passed on from its parent.
                </p>
                <h3>How useState works?</h3>
                <p>
                    It creates a state with passed in value as its
                    initialization value and also returns function to change
                    that state asynchronously.
                </p>
            </div>
        </div>
    );
}

export default App;
