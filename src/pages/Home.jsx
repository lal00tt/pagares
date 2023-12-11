import './App.css'
// import Convert from 'numero-a-letras'
import { useEffect, useState } from 'react'
// import moment from 'moment'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function App () {
  const [pagares, setPagares] = useState([])
  const [data, setData] = useState({
    initialFolio: 1,
    endFolio: 2,
    day: 15,
    month: 12,
    year: 2021,
    acredor: 'Delfina Icelo Hernández',
    deudor: '',
    domDeudor: '',
    aval: '',
    domAval: '',
    tel1: '',
    tel2: '',
    monto: 6500
  })

  useEffect(() => {
    renderPagares()
  }, [data])

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const renderPagares = async () => {
    const arr = []

    for (let index = data.initialFolio; index <= data.endFolio; index++) {
      arr.push(index)
    }

    setPagares(arr)
  }

  const handleChange = (val, key) => {
    const tempData = { ...data }

    tempData[key] = val

    setData(tempData)
  }

  const getMonth = (start, index) => {
    let i = start - 1 + index

    if (!meses[i]) i = i - 12
    return meses[i]
  }

  const getYear = (init, start, index) => {
    const i = start - 1 + index

    if (!meses[i]) return parseInt(init) + 1
    return parseInt(init)
  }

  const formattedNumber = (
    number
  ) => {
    return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
  }

  return (
    <main>
      <div className='w-full h-screen flex'>
        <section className='w-1/2 h-full bg-slate-300 p-5 print:hidden'>
          <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>

            <section className='flex gap-x-4'>
              <div className='w-fit flex flex-col'>
                <label htmlFor='initialFolio'>Folio inicial</label>
                <input name='initialFolio' type='number' defaultValue={data.initialFolio} onChange={(e) => { handleChange(e.target.value, 'initialFolio') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='endFolio'>Folio final</label>
                <input name='endFolio' type='number' min='1' defaultValue={data.endFolio} onChange={(e) => { handleChange(e.target.value, 'endFolio') }} />
              </div>
            </section>

            <section className='flex gap-x-2'>
              <div className='w-fit flex flex-col'>
                <label htmlFor='day'>Dia de cobro</label>
                <input name='day' type='number' min='1' max='31' defaultValue={data.day} onChange={(e) => { handleChange(e.target.value, 'day') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='month'>Mes inicial</label>
                <input name='month' type='number' min='1' max='12' defaultValue={data.month} onChange={(e) => { handleChange(e.target.value, 'month') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='year'>Año</label>
                <input name='year' type='number' min='2020' max='2025' defaultValue={data.year} onChange={(e) => { handleChange(e.target.value, 'year') }} />
              </div>
            </section>

            <div className='w-fit flex flex-col'>
              <label htmlFor='acredor'>Acredor</label>
              <input name='acredor' type='text' defaultValue={data.acredor} onChange={(e) => { handleChange(e.target.value, 'acredor') }} />
            </div>

            <section className='flex gap-x-2 flex-wrap'>
              <div className='w-fit flex flex-col'>
                <label htmlFor='deudor'>Deudor</label>
                <input name='deudor' type='text' defaultValue={data.deudor} onChange={(e) => { handleChange(e.target.value, 'deudor') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='domDeudor'>Domicilio Deudor</label>
                <input name='domDeudor' type='text' defaultValue={data.domDeudor} onChange={(e) => { handleChange(e.target.value, 'domDeudor') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='tel1'>Tel</label>
                <input name='tel1' type='text' defaultValue={data.tel1} onChange={(e) => { handleChange(e.target.value, 'tel1') }} />
              </div>
            </section>

            <section className='flex gap-x-2 flex-wrap'>
              <div className='w-fit flex flex-col'>
                <label htmlFor='aval'>Aval</label>
                <input name='aval' type='text' defaultValue={data.aval} onChange={(e) => { handleChange(e.target.value, 'aval') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='domAval'>Domicilio Aval</label>
                <input name='domAval' type='text' defaultValue={data.domAval} onChange={(e) => { handleChange(e.target.value, 'domAval') }} />
              </div>
              <div className='w-fit flex flex-col'>
                <label htmlFor='tel2'>Tel</label>
                <input name='tel2' type='text' defaultValue={data.tel2} onChange={(e) => { handleChange(e.target.value, 'tel2') }} />
              </div>
            </section>

            <section>
              <div className='w-fit flex flex-col'>
                <label htmlFor='monto'>Cantidad a pagar</label>
                <input name='monto' type='number' step='1' defaultValue={data.monto} onChange={(e) => { handleChange(e.target.value, 'monto') }} />
              </div>
            </section>

            <section className='w-fit flex gap-x-2'>
              <input className=' cursor-pointer bg-gray-500 shadow-lg shadow-gray-500/50 px-4 py-2 font-bold text-white' type='submit' value='Restablecer' />
              <button className='cursor-pointer bg-cyan-500 shadow-lg shadow-cyan-500/50 px-4 py-2 font-bold text-white' type='button' onClick={() => window.print()}>Imprimir</button>
            </section>

          </form>
        </section>
        <section className='page-pagares'>
          <div className='h-full w-full flex flex-col'>
            {
              pagares.map((folio, i) => {
                return (
                  <div className='w-full border-solid border-t border-black py-8 px-8 flex flex-col justify-between pagare' key={folio}>
                    <div className='w-full flex flex-col gap-y-5'>
                      <div className='flex justify-between font-bold'>
                        <div>
                          Pagaré N° {folio}
                        </div>
                        <div>
                          Puebla Pue. A {data.day} de {getMonth(data.month, i)} de {getYear(data.year, data.month, i)}
                        </div>
                        <div>
                          Bueno por {formattedNumber(data.monto)}
                        </div>
                      </div>
                      <div className='text-sm'>
                        <p>Debo y Pagaré incondicionalmente por el presente PAGARÉ a la señora <strong> {data.acredor} </strong>,
                          en esta ciudad de Puebla, el día <strong>{data.day} de {getMonth(data.month, i)} de {getYear(data.year, data.month, i)}</strong>, en el domicilio que se
                          indica abajo, la cantidad de <strong>{formattedNumber(data.monto)} (seis mil quinientos pesos 00/100 M.N.)</strong> Valor recibido a mi
                          entera conformidad, este pagare forma parte de una serie numerada del {data.initialFolio} al {data.endFolio} Obligándome a
                          pagar para el caso de mora un interés moratorio equivalente al 5% mensual sobre saldo
                          insolutos, como pena por falta de pago. Serán exigibles todos los que le siguen en numero,
                          además de los ya vencidos de acuerdo al Articulo 79 de la Ley general de títulos y operaciones de credito.
                        </p>
                      </div>
                      <div className='w-full flex gap-x-2 text-sm'>
                        <div className='w-1/2'>
                          <strong>Datos del Deudor</strong>
                          <p><strong>Nombre: </strong>{data.deudor}</p>
                          <p><strong>Domicilio: </strong>{data.domDeudor}</p>
                          <p><strong>Tel: </strong>{data.tel1}</p>
                        </div>
                        <div className='w-1/2'>
                          <strong>Datos del Aval</strong>
                          <p><strong>Nombre: </strong>{data.aval}</p>
                          <p><strong>Domicilio: </strong>{data.domAval}</p>
                          <p><strong>Tel: </strong>{data.tel2}</p>
                        </div>
                      </div>
                    </div>
                    <section className='flex flex-col justify-center font-bold'>
                      <div className='w-full text-center mb-10'>Aceptamos</div>
                      <div className='flex gap-5'>
                        <div className='w-1/2 mt-5 flex flex-col justify-end '>
                          <span className='w-full border-t-2 border-black text-center'>Deudor</span>
                        </div>
                        <div className='w-1/2 flex flex-col justify-end '>
                          <span className='w-full border-t-2 border-black text-center'>Aval</span>
                        </div>
                      </div>
                    </section>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
