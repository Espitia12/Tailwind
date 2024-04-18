
import HeaderBlog from './components/HeaderBlog/HeaderBlog'
import { Home } from './components/Pages/Home/Home'
import { MainBlog } from './components/MainBlog/MainBlog'
import { extras } from './scripts/extras'
import { Noticia } from './components/Noticia/Noticia'



function App() {



  const viewNews=()=> {
    const counter = extras.length
    if (counter <= 5 ) {
      return extras
    }
    
  }

  return (
    <>
    <Home> 
      <HeaderBlog> 
      </HeaderBlog>
      <MainBlog>
        <section className=' w-1/2 h-96 mr-3 ml-5 border-4 border-gray-500'>
          


        </section>
        <section className=' w-1/2  ml-3 mr-5 border-4 border-gray-500 flex-row'>
          <Noticia/>
        </section>
      </MainBlog>
      
    </Home>
    </>
  )
}

export default App
