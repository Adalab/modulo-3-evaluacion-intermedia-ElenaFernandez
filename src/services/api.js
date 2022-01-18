// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos al API
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json') // Este 5 es el id de Leia Skywalker
      .then(response => response.json())
      .then(response => {
        // Cuando responde el API podemos limpiar los datos aquí
        const result = response.results
        return result;
      });
  };
  
  export default callToApi;