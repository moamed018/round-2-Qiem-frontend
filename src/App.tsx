import './App.css'
import Header from './shared/Header'
import Sidebar from './shared/Sidebar'

function App() {

  return (
    <section className='text-6xl'>
      <Header />
      <main className='flex '>
        <div className='w-[100%] '></div>
      <Sidebar/>
      </main>
    </section>
  )
}

export default App
