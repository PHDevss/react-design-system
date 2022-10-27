import { Logo } from './Logo';
import './styles/global.css';
import { Heading } from './components/Heading'

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100'>
      <Logo />
      <Heading size='lg'>
        Ignite Lab
      </Heading>
    </div>
  )
}

