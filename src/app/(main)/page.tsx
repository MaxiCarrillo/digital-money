import { homeData } from "@/data/home";
import { Card } from "@/shared/components/card/card";
import { Navbar, NavbarLink } from "@/shared/components/navbar/navbar";
import parse from "html-react-parser";
import { cookies } from "next/headers";

const links: NavbarLink[] = [
  { href: "/login", label: "Ingresar", variant: "button-outline" },
  { href: "/register", label: "Crear cuenta", variant: "button" },
]

export default async function Home() {

  const accessToken = (await cookies()).get('acc_token');

  return (
    <>
      <Navbar links={accessToken ? undefined : links} username={accessToken ? 'Lionel Messi' : undefined} />
      <main>
        <section className='bg-[url("/images/hero-mobile.png")]  sm:bg-[url("/images/hero.png")] bg-top h-full bg-cover relative flex flex-col justify-between'>
          <div>
            <h1 className="text-5xl  max-w-xs text-balance sm:max-w-md font-normal px-8 pt-16 leading-12">{homeData.title}</h1>
            <div className="block sm:hidden w-[50px] bg-accent h-2 ml-8 mt-5 mb-3" ></div>
            <h2 className='text-accent text-3xl font-medium mt-2 px-8'>{parse(homeData.subTitle)}</h2>
          </div>
          <div className=" flex flex-wrap justify-center gap-4 px-8 py-4 mt-6 z-10">
            <Card
              title={homeData.cards.transfer.title}
              description={homeData.cards.transfer.description}
            />
            <Card
              title={homeData.cards.services.title}
              description={homeData.cards.services.description}
            />
          </div>
          <div className="bg-accent absolute bottom-0 h-2/5 md:h-1/3 xl:h-1/4 w-full rounded-t-4xl z-0"></div>
        </section>
      </main>
    </>
  );
}
