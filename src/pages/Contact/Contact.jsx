import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'

function Contact() {
    return (
        <>
            {/* <Navbar /> */}
            <div className='flex flex-col mx-auto justify-center items-center my-12'>
                <div className="contactText my-40">
                    <p className='my-4'>Persoana de contact:</p>
                    <p className='my-4'>ȘTEFAN LUCIAN</p>
                    <p className='my-4'>Strada B nr. 32, Ovidiu, județul Constanța</p>
                    <p className='mt-8'>Telefon de contact:</p>
                    <p className='my-2'>0744226640</p>
                </div>
            </div>
        </>
    )
}

export default Contact
