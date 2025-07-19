import React from 'react'

export const VerificationForm = () => {
    return (
        <>
            <h1 className='text-center text-xl my-4'>Ingresá el código de verificación</h1>
            <form className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="verification-code" hidden>Código</label>
                    <input
                        type="text"
                        id="verification-code"
                        name="verification-code"
                        placeholder="Código*"
                        required
                    />
                </div>
                <button type="submit" className="button py-3">Continuar</button>
                {/* <p className='text-center text-red-500 italic'>Código incorrecto. Vuelve a intentarlo</p> */}
            </form>
        </>
    )
}
