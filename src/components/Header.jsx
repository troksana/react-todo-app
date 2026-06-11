import {CheckSquare} from 'lucide-react'

const Header= ()=> {
return(<header className='text-white rounded-lg shadow-lg mb-8 text-center p-8 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]'>
        <div className='header-content'>
          <CheckSquare size={32} className='header-icon'/>
          
          <h1 className='header-title'>Todo list</h1>

        </div>
      <p className='header-subtitle'>Organise your task efficiently</p>
      </header>)
}

export default Header