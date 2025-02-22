"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import {TypeScript, JavaScript,NextJSDark,Django,PythonDark,
  Electron,ReactDark, TailwindCSSDark,AngularDark,NodeJSDark,MongoDB, GithubDark,VSCodeDark } from "@fdorantesm/react-skill-icons";
import React from "react";


export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/myface3.jpg"
          alt="Profile photo"
          className="rounded-full  border-2 border-x-violet-300  bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto"
          unoptimized
          width={260}
          height={160}
          priority
          
        />
      </a>
      <div className="mb-8 text-2xl font-medium  tracking-tight ">
      
      
      <ReactTyped
        strings={["Desenvolvedor Full-Stack", "Estudante de Sistemas de Informação"]}
        typeSpeed={80}
        backSpeed={50}
        loop
        >

        </ReactTyped>
        </div>
        <div id="skills" className="flex flex-wrap space-x-2">
        <TypeScript width={50} height={100} />
        <JavaScript width={50} height={100} />
        <NextJSDark width={50} height={100} />
        <Django width={50} height={100} />
        <PythonDark width={50} height={100} />
        <Electron width={50} height={100} />
        <ReactDark width={50} height={100} />
        <TailwindCSSDark width={50} height={100} />
        <AngularDark width={50} height={100} />
        <NodeJSDark width={50} height={100} />
        <MongoDB width={50} height={100} />
        <GithubDark width={50} height={100} />
        <VSCodeDark width={50} height={100} />
        </div>
    
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Me chamo Derek e estou em busca em uma oportunidade no mercado de trabalho.
        </p>
        <p>
          Fiz esse portfólio para apresentar um pouco de meus projetos 🔥🔥 
          
          
        </p>
        <p>
          Fiz esse portfólio em Next, que é um{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          
        </p>
        <p>
        Segue a lista de 👉
          <Link href="/projects"> Projetos</Link>.
        </p>
        <div className="mb-8">
        
          </div>
      </div>
    </section>
  );
}
