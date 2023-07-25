import JobCard from './JobCard.js';

const JobsBoard = (props) => {
  const jobs = props.jobs;
  
  return (
    <section className="py-12 py-sm-24 bg-info-light position-relative overflow-hidden">          <img className="position-absolute bottom-0 start-50 translate-middle-x" src="images/gradient2.svg" alt="Background" />
      <div className="container position-relative">
        <div className="mb-16 text-center">
          <h2 className="mt-1 mb-5">Open positions</h2>            
        </div>
        <div className="jobs-grid">
          {
            jobs.map((job, id) => <JobCard key={id} job={job}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default JobsBoard;