import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*Aca puede haber lo que quieras :) Tanto un menu como un header*/}
      
      {children}

      <footer className="h-5 p-5 flex items-center justify-center">
        Powered by &nbsp;<a href="https://nsantillan.tech" className="font-medium flex items-center" target="_blank" rel="noreferrer">
          Nahuel Santillan &nbsp;
          <Image src="/hopper.webp" alt="Hopper" height={18} width={18}/>
        </a>
      </footer>
    </>
  )
}