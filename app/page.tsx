import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <div className="bc-sans">
        <Image
          src="/bc-trails-logo.svg"
          alt="BC Trails Logo"
          width={344}
          height={75}
          className="max-w-full mx-auto mb-12"
        />
        <p className="text-center mb-12 max-w-sm mx-auto">Welcome to the RSTBC Kiosk Sign Generator. Complete the questionnaire below to generate a sign and download print-ready files.</p>
      </div>


    </main>
  );
}
