'use client'

import ThemeToggler from "./components/ThemeToggler"
import FileList from "./components/UI/FileList"
import Header from "./components/UI/Header"
import {
  handleDrop
} from "./handler/handler"

const mainPage = () => {

  return (
    <main
    onDrop={handleDrop}
    className=""
    >
      <Header />
      <FileList />
      <section>
        <div>
          

        </div>  
      </section>
    </main>
  )
}

export default mainPage