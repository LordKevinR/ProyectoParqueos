
// function Entrada() {
//   return (
//     <div>
//         <div className="grid grid-cols-3">
//             <p></p>
//             <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Entrada</h1>
//             <p></p>
//         </div>

//         <h2 className="text-3xl text-center mt-5 text-green-500 font-bold">Bienvenidos a Agora Mall</h2>

//         <div className="md:flex w-full items-center md:gap-5 mt-10 justify-center">
//             <img className="hover:scale-110 mx-auto md:mx-0 transition-all cursor-pointer w-64" src="https://us.123rf.com/450wm/newartgraphics/newartgraphics1401/newartgraphics140100027/24938350-el-bot%C3%B3n-rojo-redondo-con-borde-met%C3%A1lico.jpg" alt="push button" />
//             <p className="text-4xl mt-10 md:mt-0 text-red-500 text-center font-bold">Pulse el Botón Para Levantar la Barra</p>
//         </div>

//     </div>
//   )
// }

// export default Entrada


import React, { useState, useEffect } from 'react';

function Entrada() {

  const [isOpen, setisOpen] = useState(false)

  const [isOpenTwo, setIsOpenTwo] = useState(false)

  const [disponibilidad, setDisponibilidad] = useState(null);

  // useEffect(() => {
  //   // Realiza una solicitud GET a la API
  //   fetch('https://www.turnopacientesresonanciaa.somee.com/api/parqueos')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Actualiza el estado con el valor recibido de la API
  //       setDisponibilidad(1800 - data); // Asume que la API devuelve un número
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener datos de la API', error);
  //     });
  // }, []); // El segundo argumento [] asegura que la solicitud se realice solo una vez al cargar el componente

  const handleButtonPressTwo = async () => {
    fetch('https://www.turnopacientesresonanciaa.somee.com/api/parqueos')
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado con el valor recibido de la API
        setDisponibilidad(1800 - data); // Asume que la API devuelve un número
      })
  }

  const handleButtonPress = async () => {
      const response = await fetch('https://www.turnopacientesresonanciaa.somee.com/api/parqueos', {
        method: 'POST',
      });
  };



  return (
    <>
      <div className="grid grid-cols-3">
        <p></p>
        <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Entrada</h1>
        <p></p>
      </div>

      <h2 className="text-3xl text-center mt-5 text-green-500 font-bold">Bienvenidos a Agora Mall</h2>

      <div className="md:flex w-full items-center md:gap-5 mt-10 justify-center">
        <img
          className="hover:scale-110 mx-auto md:mx-0 transition-all cursor-pointer w-64"
          src="https://us.123rf.com/450wm/newartgraphics/newartgraphics1401/newartgraphics140100027/24938350-el-bot%C3%B3n-rojo-redondo-con-borde-met%C3%A1lico.jpg"
          alt="push button"
          onClick={() => {
            handleButtonPress();
            setisOpen(true);
            setTimeout(() => {
              setisOpen(false);
              setIsOpenTwo(true);
            }, 3000);
            
            setTimeout(() => {
              setIsOpenTwo(false);
            }, 7000);
            handleButtonPressTwo();

          }}
        />
        <p className="text-4xl mt-10 md:mt-0 text-red-500 text-center font-bold">Pulse el Botón Para Levantar la Barra</p>
      </div>

      {isOpen && (
        <div className='fixed inset-0 transition-all bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white border-orange-500 border-8 p-5 w-3/4 rounded-lg flex flex-col justify-center items-center gap-5'>
              <h1 className='text-5xl font-bold text-center border-b-orange-500 border-b-4 w-3/4 pb-3 text-orange-500 '>Bienvenido, Puede Entrar</h1>
              <img className='w-96' src="https://us.123rf.com/450wm/yupiramos/yupiramos1703/yupiramos170300852/73286854-zona-de-estacionamiento-entrada-barricada-ilustraci%C3%B3n-vectorial-dise%C3%B1o.jpg?ver=6" alt="" />
          </div>
        </div>
      )}

      {isOpenTwo && (
        <div className='fixed inset-0 transition-all bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white border-orange-500 border-8 p-5 w-3/4 rounded-lg flex flex-col justify-center items-center gap-5'>
              <h1 className="md:text-7xl text-6xl text-center m-20 font-bold text-green-500">Parqueos Disponibles</h1>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Entrada;
