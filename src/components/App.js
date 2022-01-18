import { useState } from 'react';
import '../styles/App.scss';
import adalabersList from '../data/data.json';
//import callToApi from '../services/api';

function App() {
  const[list, setList] = useState(adalabersList.results);
  const[name, setName]=useState('');
  const[mentorin,setMentorin]=useState('');
  const[speciality,setSpeciality]=useState('');

  const tableHtml = list.map((adalaber, id) => (
    <tr key={id}>
      <td> {adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
    </tr>
  ));
  
  const handleSubmit=(event)=>{
    event.preventDefault();
  };
  const handleNewName=(event)=>{
    setName(event.target.value);
  };

  const handleNewMentorin=(event)=>{
    setMentorin(event.target.value);
  };
  
  const handleNewSpeciality=(event)=>{
    setSpeciality(event.target.value);
  };

  const handleClick=(event)=>{
    event.preventDefault();
    const newAdalaber={
      name:name,
      counselor: mentorin,
      speciality: speciality
    };
    setList([...list, newAdalaber]);
    setName('');
    setMentorin('');
    setSpeciality('');
    
  };

  return (
    <div>
      <header>
        <h1>Mis Adalabers</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody>{tableHtml}</tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <h2>Añadir una nueva Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" onChange={handleNewName} value={name} />
          <label htmlFor="mentorin">Tutora</label>
          <input type="text" onChange={handleNewMentorin} value={mentorin}/>
          <label htmlFor="speciality">Especialidad</label>
          <input type="text" onChange={handleNewSpeciality} value={speciality}/>
         <input type="submit" onClick={handleClick} value= "Añadir una nueva Adalaber"/>  
        </form>
      </main>
    </div>
  );
}

export default App;
