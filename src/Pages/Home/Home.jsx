import NewCollections from '../../Components/NewCollection/NewCollection'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import FallCollection from '../../Components/FallCollection/FallCollection'
import SectionServices from '../../Components/SectionServices/SectionServices'
import Slider from '../../Components/Slider/Slider'
import Timer from '../../Components/Timer/Timer'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      
    <Slider/>
    <SectionServices/>
    
    <FallCollection/>
      <Timer/>
    <NewCollections/>
    <NewsLetter/>
    
  
    
    </div>
  )
}

export default Home