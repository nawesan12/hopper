import { type NextPage } from "next"
import Image from "next/image"
import docs from "@utils/docs.json"

const Home: NextPage = () => {
  return (
    <>
    <main className="flex flex-col items-center py-5">
      <section className="title my-5">
        <h1 className="text-4xl flex gap-2 font-semibold">Welcome to Hopper! <Image src='/hopper.webp' width={30} height={30} alt="Hopper!"/></h1>
        <h2 className="text-xl font-semibold">A brand new link showcase</h2>
      </section>

      <section className="description w-screen max-w-screen-md">
        {docs.about.map((e, index) => (
          <article className="my-5" key={index}>
            <h3 className="text-2xl font-semibold">{e.title}</h3>
            <p>{e.content}</p>
          </article>    
        ))}

        <article className="my-5">
          <h3 className="font-semibold text-2xl">Documentation</h3>
          <section className="docs">
            <article className="part my-3">
              <h4 className="font-semibold text-xl">Data Types</h4>
              {
              docs.objects.map((object, index) => (
                <article key={index} className="p-3">
                  <h5 className="pb-2">{object.name}</h5>
                  <ul className="px-2">
                  {Object.entries(object.types).map((e, index) => (
                    <li key={index} className="my-2">
                      <span className="font-medium">{e[0]}:</span> {e[1]}
                    </li>
                  ))}
                  </ul>
                </article>
              ))
              }
            </article>
            <article className="part my-3">
              <h4 className="font-semibold text-xl">Routes</h4>
              {
              docs.routes.map((route, index) => (
                <div className="routes-group p-4" key={index}>
                  <h5 className="text-lg font-medium">{route.type}</h5>
                  <ul className="p-2">
                  {
                    route.paths.map((path, index) => (
                      <li key={index} className="my-5 flex flex-col gap-2 bg-lime-50 p-2 border-solid border border-black">
                        <h6 className="font-medium">{path.name}</h6>
                        <p>{path.description}</p>
                        {path.body ? (
                          <p className="flex flex-col gap-y-2">
                            Expected body: <br />
                            <span className="bg-slate-300 p-2 px-4 max-w-max rounded-md">
                              {JSON.stringify(path.body)}
                            </span>
                          </p>
                        ) : null}
                      </li>
                    ))
                  }
                  </ul>
                </div>
              ))
              }
            </article>
            <p>{docs.ideas}</p>
          </section>
        </article>
      </section>
      <br />
      <p></p>
    </main>
    </>
  );
};

export default Home;
