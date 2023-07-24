'use client'

import { CarouselMolecule } from '../components/molecules';

export async function HomeTemplate() {
    return (
      <main id="home-template" className="flex flex-col p-[2rem] h-screen">
        <h1 className="flex justify-center text-4xl">DEPARTAMENTOS EN RENTA</h1>
        <br></br>
        <section>
            <CarouselMolecule/>
        </section>
        <br></br>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h1>DIRECCIÓN</h1>
            <h2>Av. El Trabajo, San Pedro Tepetitlán Acolman, Estado de México, 55894.</h2>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1878.957913900012!2d-98.88677733740715!3d19.630895998691642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDM3JzUxLjIiTiA5OMKwNTMnMDkuOSJX!5e0!3m2!1ses-419!2smx!4v1690233360558!5m2!1ses-419!2smx"
              style={{ border: 0, width: '50%', height: '38vh' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '50%' }}>
                  <h1>RENTA MENSUAL</h1>
                  <h2>$2,000.00 MXN</h2>
                  <br></br>
                  <h1>CONTACTO</h1>
                  <h2>Email: martigabriel021272@gmail.com</h2>
                  <h2>Cel: +52 55 7389 5873</h2>
                </div>
                {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', width: '50%' }}>
                  <h1>ENVIA UN MENSAJE</h1>
                  <div className="max-w-md" style={{ width: '80%' }}>
                    <TextInput
                      placeholder="Nombre"
                      required
                      type="text"
                    />
                  </div>
                  <div className="max-w-md" style={{ width: '80%' }}>
                    <TextInput
                      icon={HiMail}
                      id="email4"
                      placeholder="micorreo@email.com"
                      required
                      type="email"
                    />
                  </div>
                  <div
                    className="max-w-md"
                    id="textarea"
                    style={{ width: '80%' }}
                  >
                    <Textarea
                      id="comment"
                      placeholder="Hola..."
                      required
                      rows={5}
                    />
                  </div>
                  <Button color="success" style={{ width: '10rem' }}>Enviar</Button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
  