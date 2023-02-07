import Button from "./Button";

function App(){

    return <div>
        <div><Button primary outline>Hi there !</Button></div>
        <div><Button  danger>Hello world 1</Button></div>
        <div><Button warning>Hello world 2</Button></div>
        <div><Button success outline >Hello world 3</Button></div>
        <div><Button secondary rounded >Hello world 4</Button></div>
    </div>
}
export default App;