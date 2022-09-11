import Content from './Content.json';

const SCP = Content.map(
(content) => {return(
  <div className = "bg-dark p-3 card m-3"> 
    
    <h1 className='text-white card-black text-center bg-primary'>Item: {content.item}</h1>
    <h3 className='text-white card-black text-center bg-danger'>Class: {content.class}</h3>
    <p className='text-white card-black m-3'>Contaiment: {content.contaiment}</p>
    <p className='text-white card-black m-3'> {content.discrpion}</p>
    <p><img src={content.images} alt="Pic" className='img-fluid rounded mx-auto d-block b m-3'></img></p>
    
  </div>);}
)

function App() {
 return (  <div>{SCP}</div>);
}

export default App;
