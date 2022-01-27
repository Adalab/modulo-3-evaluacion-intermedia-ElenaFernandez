import { useState,useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [mentorin, setMentorin] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [search, setSearch] = useState('');
  const[searchMentorin,setSearchMentorin]=useState('');
   
useEffect(()=>{
  callToApi().then(response => {setList(response)});
}, []);

  const filteredAdalaber = list.filter((oneAdalaber) =>
    oneAdalaber.name.toLowerCase().includes(search.toLowerCase()) && oneAdalaber.counselor.toLowerCase().includes(searchMentorin.toLowerCase())
  );

  const tableHtml = filteredAdalaber.map((adalaber, id) => (
    <tr key={id} className="bodyt">
      <td> {adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
      <td>{adalaber.social_networks.map((redes,index)=>{
        return <a key={index} href={redes.url}>{redes.name}</a>
      })}</td>
    </tr>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleNewName = (event) => {
    setName(event.target.value);
  };

  const handleNewMentorin = (event) => {
    setMentorin(event.target.value);
  };

  const handleNewSpeciality = (event) => {
    setSpeciality(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchMentorin=(event)=>{
    setSearchMentorin(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: mentorin,
      speciality: speciality,
    };
    setList([...list, newAdalaber]);
    setName('');
    setMentorin('');
    setSpeciality('');
    
  };

  return (
    <div>
      <header className="header">
        <h1>Mis Adalabers</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Nombre:</label>
          <input type="text" value={search} onChange={handleSearch} />
          <label htmlFor="choose">Escoge una tutora:</label>
          <select name="options" id="options" onChange={handleSearchMentorin}>
            <option value="all">Escoge una opción</option>
            <option value="dayana">Dayana</option>
            <option value="yanelis">Yanelis</option>
            <option value="iván">Iván</option>
          </select>
        </form>
      </header>
      <main>
        <table>
          <thead className="thead">
            <tr>
              <th>Nombre</th>
              <th className="thead_tutor">Tutora</th>
              <th>Especialidad</th>
              <th>Redes</th>
            </tr>
          </thead>
          <tbody>{tableHtml}</tbody>
        </table>
        <form onSubmit={handleSubmit} className="form">
          <h2>Añadir una nueva Adalaber</h2>
          <label htmlFor="name">Nombre:</label>
          <input type="text" onChange={handleNewName} value={name} className="input" />
          <label htmlFor="mentorin" className="label">Tutora</label>
          <input type="text" onChange={handleNewMentorin} value={mentorin}className="input" />
          <label htmlFor="speciality" className="label">Especialidad</label>
          <input
            type="text"
            onChange={handleNewSpeciality}
            value={speciality}
            className="input"
          />
          <input
            type="submit"
            onClick={handleClick}
            value="Añadir una nueva Adalaber"
            className="btn"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
