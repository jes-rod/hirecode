

const NavBar = () => {
  return (
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container justify-content-center">
            <div className="navbar-brand me-6"><img className="img-fluid" src="images/hirecode-logo-png-1689777929726.webp" alt="" /></div>
          </div>
        </nav>
        <div className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs" style={{zIndex: "9999"}}>
          <div className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark" style={{opacity: "75%"}}></div>
          <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
            <div className="d-flex align-items-center">
      <div className="me-auto h4 mb-0 text-decoration-none" >
        <img className="img-fluid" src="images/hirecode-logo-png-1689777929726.webp" alt="" />        </div>
        <div className="navbar-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
            
            <div>
      <a className="btn w-100 btn-dark" href="index.html">Back to home</a>
      </div>
          </nav>
        </div>
      </section>
  )
}

export default NavBar