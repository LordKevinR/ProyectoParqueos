import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <div>
        <div className="grid md:grid-cols-3 border-b-2 items-center w-full justify-center md:justify-between">
            <Link to='/'>
                <img className="w-64 mx-auto md:mx-0 -mt-16" src="https://agora.com.do/content/uploads/agora-mall-seo-logo.jpg" alt="agora logo" />     
            </Link>
            <h1 className="lg:text-4xl -mt-10 pb-5 md:pb-0 text-2xl md:text-3xl whitespace-nowrap text-orange-500 text-center md:-mt-16 font-bold underline tracking-wider">Administracion de Parqueos</h1>
        </div>

        <Outlet />
    </div>
  )
}

export default Layout