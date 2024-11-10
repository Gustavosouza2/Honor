
export default function Home() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#122d3b] to-[#48a7af] font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow flex flex-col items-center justify-items-center p-20 sm:p-20">
        <h1 className="text-[#D2AE47] font-[family-name:var(--font-montserrat)] md:text-lg animate-fade-up animate-once animate-duration-[1400ms]">
          CONFERÊNCIA
        </h1>
        <h2 className="text-[#D2AE47] font-[family-name:var(--font-geist-mono)] md:text-9xl text-7xl animate-fade-up animate-once animate-duration-[1300ms]">
          HONRA
        </h2>
        <p className="text-[#D2AE47] font-[family-name:var(--font-montserrat)] tracking-[0.25em] md:text-lg text-xs animate-fade-up animate-once animate-duration-[1200ms]">
          O PRINCÍPIO DOS FILHOS
        </p>
      </main>
      <footer className="p-10 text-center">
        <p className="text-[#D2AE47] font-[family-name:var(--font-montserrat)] md:text-lg text-xs animate-fade-up animate-once animate-duration-[1000ms]">
          {`Copyright © ${year}, IGREJA CASA DO PAI`}
        </p>
      </footer>
    </div>
  )
}
