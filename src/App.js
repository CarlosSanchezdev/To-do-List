import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import  List  from "./components/List";
import {useState} from 'react'

function App() {
  const [create, setCreate] = useState(false);
  
  return (
    <>
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Aside create={create} setCreate={setCreate}/>
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <Header />
            <div className="main-content  flex flex-col flex-grow p-4">
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl text-gray-700">Tasks</h1>
                
              
                <span onClick={() => setCreate(true)} className=" text-lg text-cyan-300 md:invisible flex items-center justify-center cursor-pointer">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              
            
          
              <div class="flex flex-col flex-grow items-center  bg-white rounded mt-4">
                <List create={create} setCreate={setCreate}/>
              </div>
            </div>
          <Footer/>
        </main>
      </div>
    </>
  );
}

export default App;
