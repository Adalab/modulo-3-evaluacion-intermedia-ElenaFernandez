import { useState } from 'react';
import '../styles/App.scss';
import adalabersList from '../data/data.json';
//import callToApi from '../services/api';

function App() {
  const [list, setList] = useState(adalabersList);
  const tableHtml = list.results.map((adalaber, id) => (
    <tr key={id}>
      <td> {adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
    </tr>
  ));
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
      </main>
    </div>
  );
}

export default App;
