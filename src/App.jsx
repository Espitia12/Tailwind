
import HeaderBlog from './components/HeaderBlog/HeaderBlog'
import { Home } from './components/Pages/Home/Home'
import { MainBlog } from './components/MainBlog/MainBlog'
import { extras } from './scripts/extras'
import { Noticia } from './components/Noticia/Noticia'
import fondo from './assets/The Eclipse, Berserk.jpg'



function App() {




  return (
    <>
    <Home> 
      <HeaderBlog> 
      </HeaderBlog>
      <MainBlog>
        <section className=' w-1/2  mr-3 ml-5 border-4 border-gray-500 '>
          <div style= {{backgroundImage:`url(${fondo})`}} className=' bg-cover bg-no-repeat h-2/3'>

          </div>
          <div className=' w-full h-2/6 p-2 bg-neutral-800'>
            <p className='text-slate-50 '>26-10-1995 </p>
            <h1 className='text-lg-text- text-slate-50 '>El eclipse</h1>
            <div className='h-40 overflow-y-auto '>
             <p className='text-slate-50  text-base pr-5'>Es un suceso (también llamado por Void "festival nocturno" o "ceremonia del advenimiento demoníaco") realizado cada 216 años por los  miembros de la Mano de Dios donde se realiza un banquete entre apóstoles para nombrar a un nuevo miembro de este grupo todopoderoso. Se realiza en las mismas circunstancias en las  que un apóstol invoca a la Mano de Dios, con el poseedor del beherit carmesí (el "Huevo del Conquistador") estando en una situación límite. Sin embargo, este caso es especial, ya  que el individuo es elegido con un beherit diferente de los otros. Es entonces cuando los apóstoles leales a la Mano de Dios se reúnen para tener un festín con el sacrificio, que  suele s er en masa tras ser marcado con el Estigma del Maldito. Se crea un punto de intersección temporal entre el Plano Material y el astral, de donde es casi imposible escapar con  vida: de ocurrir, el individuo quedaría entre ambos mundos, permaneciendo en el material mientras las criaturas demoníacas le perseguirían para tomar su festín prometido. Por su  parte, el escogido se transforma en miembro de la Mano de Dios, con sus poderes y limitaciones.</p>
            </div>
          </div>

        </section>
        <section className=' w-1/2  ml-3 mr-5 border-4 border-gray-500 flex-row bg-neutral-800'>
          <Noticia/>
        </section>
      </MainBlog>
      
    </Home>
    </>
  )
}

export default App
