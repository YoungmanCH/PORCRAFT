import React from 'react'

const Howto = () => {
  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute top-56 left-0 right-0 flex 
      items-center justify-center"
      >
        <div className="start">
          <p className="start-text">
            Create your own portfolio with 3D objects!{" "}
          </p>
          <div className="flex">
          <Link to="/howto" className="btn">
            How to?
          </Link>  
          <Link to="/editor" className="btn pading-all-20px">
            Get started!
          </Link>
          <Link to="/sample" className="btn">
            Sample
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Howto