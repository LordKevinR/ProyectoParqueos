
// function Salida() {
//     return (
//         <div>
//         <div className="grid grid-cols-3">
//             <p></p>
//             <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Salida</h1>
//             <p></p>
//         </div>

//         <h2 className="text-3xl text-center mt-5 text-green-500 font-bold">Vuelva Pronto</h2>

//         <div className="md:flex w-full items-center md:gap-5 mt-10 justify-center">
//             <img className="hover:scale-110 mx-auto md:mx-0 transition-all cursor-pointer w-64" src="https://us.123rf.com/450wm/newartgraphics/newartgraphics1401/newartgraphics140100027/24938350-el-bot%C3%B3n-rojo-redondo-con-borde-met%C3%A1lico.jpg" alt="push button" />
//             <p className="text-4xl mt-10 md:mt-0 text-red-500 text-center font-bold">Pulse el Botón Para Levantar la Barra</p>
//         </div>

//     </div>
//     )
//   }
  
//   export default Salida


// function Salida() {
//   return (
//     <div>
//         <div className="grid grid-cols-3">
//             <p></p>
//             <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Salida</h1>
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

// export default Salida


import React, { useState } from 'react';



function Salida() {

  const [isOpen, setisOpen] = useState(false)

  const handleButtonPress = async () => {
      const response = await fetch('https://www.turnopacientesresonanciaa.somee.com/api/parqueos', {
        method: 'DELETE',
      });
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <p></p>
        <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Salida</h1>
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
            setTimeout(() => {setisOpen(false);}, 3000);
          }}
        />
        <p className="text-4xl mt-10 md:mt-0 text-red-500 text-center font-bold">Pulse el Botón Para Levantar la Barra</p>
      </div>

      {isOpen && (
        <div className='fixed inset-0 transition-all bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white border-orange-500 border-8 p-5 w-3/4 rounded-lg flex flex-col justify-center items-center gap-5'>
              <h1 className='text-5xl font-bold text-center border-b-orange-500 border-b-4 w-3/4 pb-3 text-orange-500 '>Gracias Por Su Visita, Puede Salir</h1>
              <img className='w-96' src="https://us.123rf.com/450wm/yupiramos/yupiramos1703/yupiramos170300852/73286854-zona-de-estacionamiento-entrada-barricada-ilustraci%C3%B3n-vectorial-dise%C3%B1o.jpg?ver=6" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default Salida;
