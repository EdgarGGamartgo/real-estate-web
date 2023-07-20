'use client'

import { Button } from 'flowbite-react';
import { CarouselMolecule } from '../components/molecules';

export async function HomeTemplate() {
    return (
      <main id="home-template" className="flex flex-col p-[2rem] h-screen">
        <h1 className="flex justify-center mb-[1rem] text-4xl">DEPARTAMENTOS EN RENTA</h1>

        <section className='mb-[5rem] mt-[5rem] h-1/3'>
            <CarouselMolecule/>
        </section>

        <section>
            <Button color="success">Click me</Button>
        </section>
      </main>
    )
  }
  