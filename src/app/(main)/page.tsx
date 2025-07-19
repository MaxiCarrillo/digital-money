import { Card } from "@/shared/components/card/card";
import { Navbar, NavbarLink } from "@/shared/components/navbar/navbar";

const links: NavbarLink[] = [
  { href: "/login", label: "Ingresar", variant: "button-outline" },
  { href: "/register", label: "Crear cuenta", variant: "button" },
]

export default function Home() {

  return (
    <>
      <Navbar links={links} />
      <main>
        <section className='bg-[url("/images/hero-mobile.png")]  sm:bg-[url("/images/hero.png")] bg-top h-full bg-cover relative flex flex-col justify-between'>
          <div>
            <h1 className="text-5xl  max-w-xs text-balance sm:max-w-md font-normal px-8 pt-16 leading-12">De ahora en adelante, hacés más con tu dinero</h1>
            <h2 className='text-accent text-3xl mt-2 px-8'>Tu nueva <strong>billetera virtual</strong></h2>
          </div>
          <div className=" flex flex-wrap justify-center gap-4 px-8 py-4 mt-6 z-10">
            <Card
              title="Transferí dinero"
              description="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual"
            />
            <Card
              title="Pago de servicios"
              description="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel"
            />
          </div>
          <div className="bg-accent absolute bottom-0 h-1/2 lg:h-1/4 w-full rounded-t-4xl z-0"></div>
        </section>
      </main>
    </>
  );
}
