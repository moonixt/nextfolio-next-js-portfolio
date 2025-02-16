import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/dante.jpg"
          alt="Profile photo"
          className=" bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
      W. Derek
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Me chamo Derek e estou em busca em uma oportunidade no mercado de trabalho.
        </p>
        <p>
          Fiz esse portfólio para apresentar um pouco de meus projetos 🔥🔥 {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            saiba mais
          </a>
          .
        </p>
        <p>
          Fiz esse portfólio em Next, que é um{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          
        </p>
        <p>
        Segue a lista de 👉
          <Link href="/projects">projetos</Link>.
        </p>
        
      </div>
    </section>
  );
}
