
function Entrada() {
  return (
    <div>
        <div className="grid grid-cols-3">
            <p></p>
            <h1 className="text-center text-4xl underline tracking-widest mt-5 text-orange-500 font-bold">Entrada</h1>
            <p></p>
        </div>

        <h2 className="text-3xl text-center mt-5 text-green-500 font-bold">Bienvenidos a Agora Mall</h2>

        <div className="md:flex w-full items-center md:gap-5 mt-10 justify-center">
            <img className="hover:scale-110 mx-auto md:mx-0 transition-all cursor-pointer w-64" src="https://us.123rf.com/450wm/newartgraphics/newartgraphics1401/newartgraphics140100027/24938350-el-bot%C3%B3n-rojo-redondo-con-borde-met%C3%A1lico.jpg" alt="push button" />
            <p className="text-4xl mt-10 md:mt-0 text-red-500 text-center font-bold">Pulse el Botón Para Levantar la Barra</p>
        </div>

    </div>
  )
}

export default Entrada