import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col mx-auto justify-center items-center my-40'>

                <img src="energyPerfomanceImage.jpg" alt="Energy Perfomance Image" className='my-12' />
                <p className='homeText'>Firma DALURA FINANCE S.R.L. vă oferă prin Stefan Lucian,  </p>
                <p className='homeText'>auditor energetic gr 1 C.I. cu o experiență în domeniu de peste 14 ani, </p>
                <p className='homeText'>servicii profesionale de auditare si certificare energetică.</p>
            </div>
        </>
    )
}

export default Home
