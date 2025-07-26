'use client'

import ThemeToggler from "./components/ThemeToggler"
import FileUploader from "./components/UI/FileUploader"
import TestSwal from "./components/testswal"
import Header from "./components/UI/Header"

const mainPage = () => {

  return (
    <main
    className=""
    >
      <Header />
      <FileUploader />
      <TestSwal />
      <section>
        <div>
          

        </div>  
      </section>
    </main>
  )
}

export default mainPage