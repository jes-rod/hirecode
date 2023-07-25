
const Jumbotron = () => {
  
  return (
    <section className="py-12 py-sm-24 py-md-40 position-relative">
      <img className="position-absolute top-0 start-0 w-100 h-100" src="/images/bg.jpeg" alt="" style={{objectFit: "cover"}} />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
      <div className="position-absolute top-0 start-0 h-100 w-100" style={{backdropFilter: "blur(20px)"}}></div>
      <div className="container position-relative">
        <div className="mw-3xl mx-auto text-center">
          <h1 className="h2 text-white mb-10" >Code your career path to success</h1>
          <p className="text">Start searching below</p>
        </div>
      </div>
    </section>
  )
} 

export default Jumbotron;
