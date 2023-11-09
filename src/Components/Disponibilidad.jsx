

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
      <h1 className="md:text-6xl text-5xl text-center font-bold text-green-500">Parqueos Disponibles</h1>
      {disponibilidad !== null ? (
        <div>
          <p className="md:text-7xl text-6xl text-center mt-5 text-green-500 font-bold">
            {disponibilidad} <span className="text-slate-600">/ 1800</span>
          </p>

          <div className='flex justify-around ml-10 mt-5 mr-10 rounded-3xl grid-cols-4'>

            <div className='m-5 bg-slate-300 p-10 max-w-[12rem] rounded-3xl min-w-fit flex justify-center flex-col items-center'>
              <p className='font-bold mb-2 text-2xl'>Piso 1</p>
              <div className='bg-red-600 flex items-center justify-center rounded-xl text-center w-20 h-20'>
                <p className="text-white text-3xl font-bold ">
                  132
                </p>
              </div>
              <ul className='mt-3 text-lg'>
                <li className='ml-1'>18</li>
                <li className='ml-1'>85</li>
                <li>123</li>
                <li>256</li>
                <li>296</li>
                <li>348</li>
                <li>420</li>
                <li className='ml-2'>...</li>
              </ul>
            </div>

            <div className='m-5 bg-slate-300 p-10 max-w-[12rem] rounded-3xl min-w-fit flex justify-center flex-col items-center'>
              <p className='font-bold mb-2 text-2xl'>Piso 2</p>
              <div className='bg-yellow-500 flex items-center justify-center rounded-xl text-center w-20 h-20'>
                <p className="text-white text-3xl font-bold ">
                  189
                </p>
              </div>
              <ul className='mt-3 text-lg'>
                <li>430</li>
                <li>563</li>
                <li>650</li>
                <li>711</li>
                <li>748</li>
                <li>811</li>
                <li>840</li>
                <li className='ml-2'>...</li>
            </ul>
            </div>

            <div className='m-5 bg-slate-300 p-10 max-w-[12rem] rounded-3xl min-w-fit flex justify-center flex-col items-center'>
              <p className='font-bold mb-2 text-2xl'>Piso 3</p>
              <div className='bg-green-500 flex items-center justify-center rounded-xl text-center w-20 h-20'>
                <p className="text-white text-3xl font-bold ">
                  213
                </p>
              </div>
              <ul className='mt-3 text-lg'>
                <li className='ml-1'>850</li>
                <li className='ml-1'>950</li>
                <li>1050</li>
                <li>1150</li>
                <li>1200</li>
                <li>1250</li>
                <li>1260</li>
                <li className='ml-3'>...</li>
            </ul>
            </div>

            <div className='m-5 bg-slate-300 p-10 max-w-[12rem] rounded-3xl min-w-fit flex justify-center flex-col items-center'>
              <p className='font-bold mb-2 text-2xl'>Piso 4</p>
              <div className='bg-blue-700 flex items-center justify-center rounded-xl text-center w-20 h-20'>
                <p className="text-white text-3xl font-bold ">
                  188
                </p>
              </div>
              <ul className='mt-3 text-lg'>
                <li>1270</li>
                <li>1350</li>
                <li>1425</li>
                <li>1575</li>
                <li>1630</li>
                <li>1750</li>
                <li>1799</li>
                <li className='ml-3'>...</li>
            </ul>
            </div>


          </div>
        </div>
        
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
