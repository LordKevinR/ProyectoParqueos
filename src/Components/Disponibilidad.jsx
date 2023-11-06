

// function Disponibilidad() {
//   return (
//     <>
//         <h1 className="md:text-7xl text-6xl text-center mt-20 font-bold text-green-500 ">Parqueos Disponibles</h1>
//         <p className="md:text-8xl text-7xl text-center mt-32 text-green-500 font-bold "> 574 <span className="text-slate-600">/ 1800</span></p>
//     </>
//   )
// }

// export default Disponibilidad













import React, { useState, useEffect } from 'react';

function Disponibilidad() {
  const [disponibilidad, setDisponibilidad] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    fetch('https://www.turnopacientesresonanciaa.somee.com/api/parqueos')
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado con el valor recibido de la API
        setDisponibilidad(1800 - data); // Asume que la API devuelve un número
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []); // El segundo argumento [] asegura que la solicitud se realice solo una vez al cargar el componente

  return (
    <>
      <h1 className="md:text-7xl text-6xl text-center mt-20 font-bold text-green-500">Parqueos Disponibles</h1>
      {disponibilidad !== null ? (
        <p className="md:text-8xl text-7xl text-center mt-32 text-green-500 font-bold">
          {disponibilidad} <span className="text-slate-600">/ 1800</span>
        </p>
      ) : (
        <p className="text-center text-red-500">Cargando...</p>
      )}
    </>
  );
}

export default Disponibilidad;



// import React, { useState, useEffect } from 'react';

// function Disponibilidad() {
//   const [disponibilidad, setDisponibilidad] = useState(null);

//   const fetchDisponibilidad = async () => {
//     try {
//       const response = await fetch('https://localhost:7182/api/parqueos');
//       if (response.ok) {
//         const data = await response.json();
//         setDisponibilidad(1800 - data);
//       } else {
//         console.error('Error en la solicitud GET');
//       }
//     } catch (error) {
//       console.error('Error al obtener datos de la API', error);
//     }
//   };

//   useEffect(() => {
//     // Realiza la primera consulta al cargar el componente
//     fetchDisponibilidad();

//     // Establece un intervalo para realizar consultas cada X segundos
//     const interval = setInterval(fetchDisponibilidad, 10000); // Consulta cada 5 segundos (ajusta el valor según tus necesidades)

//     return () => {
//       clearInterval(interval); // Limpia el intervalo al desmontar el componente
//     };
//   }, []);

//   return (
//     <>
//       <h1 className="md:text-7xl text-6xl text-center mt-20 font-bold text-green-500">Parqueos Disponibles</h1>
//       {disponibilidad !== null ? (
//         <p className="md:text-8xl text-7xl text-center mt-32 text-green-500 font-bold">
//           {disponibilidad} <span className="text-slate-600">/ 1800</span>
//         </p>
//       ) : (
//         <p className="text-center text-red-500">Cargando...</p>
//       )}
//     </>
//   );
// }

// export default Disponibilidad;
