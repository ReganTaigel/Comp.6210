import Content from './Content.json';

const SCP = Content.map(
(content) => {return(
  <div> 
    <h1>Item: {content.item}</h1>
    <h3>Class: {content.class}</h3>
    <p>Contaiment:{content.contaiment}</p>
    <p> {content.discrpion}</p>
    <p><img src={content.images} alt="pic"></img></p>
  </div>);}
)

function App() {
 return (  <div>{SCP}</div>);
}

export default App;
