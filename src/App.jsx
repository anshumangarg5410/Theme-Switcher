import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider} from './context/theme'

function App() {
//light = false
//dark = true
  const [themeMode, setthemeMode] = useState("light");
  const darkTheme = () => {
    setthemeMode("dark")
  }
  const lightTheme = () => {
    setthemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  const clickme = () => {
    if (themeMode == "light") {
      darkTheme(); 
      console.log("darktheme")}
    else {
      lightTheme(); 
      console.log("lighttheme")}
  }

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="main w-screen h-screen bg-blue-800 dark:bg-black flex justify-center items-center">
      <div className="maincontainer w-[25%] h-[60%] bg-transparent flex-col items-center">
        <div className="checkbox w-[100%] h-[7%] bg-transparent rounded-lg flex items-center justify-end">
            <label className="relative inline-flex items-center cursor-pointer mr-1 bg-green-400 dark:bg-green-900 p-2 mb-2 rounded-lg">
            <input type="checkbox" checked={themeMode==="dark"} onChange={clickme} className="appearance-none h-4 w-4 bg-white checked:bg-black outline-none cursor-pointer transition-all duration-2s ease-in-out rounded-full"></input>
            <button className="ml-2 mr-3 text-sm font-medium text-gray-900" onClick={clickme} >{themeMode === "light" ? "Light Mode" : "Dark Mode"}</button>
        </label>
        </div>
      <div className="container w-[100%] h-[93%] bg-blue-500 dark:bg-gray-500 rounded-lg flex-col items-center justify-start border-white border-[10px] border-double">
        <div className="heading w-full h-[16%] bg-gray-500 flex justify-center items-center text-4xl font-mono text-black dark:text-white font-bold">ID CARD</div>
        <div className="pic w-full h-[64%] bg-white">
          <div className="mainpic h-full w-full bg-[url('./assets/yo.jpg')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="status w-full h-[10%] bg-gray-500 flex justify-center items-center text-xl font-mono pt-5 text-black dark:text-white font-bold ">Anshuman Garg</div>
        <div className="status w-full h-[10%] bg-gray-500 flex justify-center items-center text-l font-mono text-black dark:text-white font-bold">Software Engineer</div>
        {/* <div className="status w-full h-[5%] bg-gray-500 flex justify-center items-center text-m font-mono text-black dark:text-white font-bold">At Amazon</div> */}
      </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
