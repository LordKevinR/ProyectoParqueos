import { Link } from "react-router-dom"

function Index() {
  return (
    <>
        <div className="grid justify-center mt-20 mx-auto text-center lg:w-[70rem]">
            <Link className="py-3 bg-slate-300 px-20 rounded-lg m-2 text-2xl font-semibold hover:scale-110 transition-all " to='/parqueos/entrada'>Pantalla Entrada</Link>
            <Link className="py-3 bg-slate-300 px-20 rounded-lg m-2 text-2xl font-semibold hover:scale-110 transition-all " to='/parqueos/salida'>Pantalla Salida</Link>
            <Link className="py-3 bg-slate-300 px-20 rounded-lg m-2 text-2xl font-semibold hover:scale-110 transition-all " to='/parqueos/disponibilidad'>Pantalla Disponibilidad</Link>
        </div>
    </>
  )
}

export default Index