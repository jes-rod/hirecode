
const JobCard = (props) => {
  const job = props.job;
  if(!job.location){
    job.location = 'Anywhere'
  }
  if(job.remote){
    job.remote = 'Remote'
  }else{
    job.remote = 'On-site'
  }
  if(!job.employment_type){
    job.employment_type = 'Employment type not defined'
  }else{
    let eType = job.employment_type
    eType = eType.charAt(0).toUpperCase() + eType.slice(1);
    job.employment_type = eType;
  }

  return (
    <div className="flex-sm-shrink-0 w-100 mw-sm-md me-sm-4">
      <a className="text-decoration-none d-flex flex-column align-items-start h-100 p-8 bg-white border rounded-4 overflow-hidden" href={job.url}>
        <div className="position-relative">
          <h5 className="fs-6 mb-3">{job.role}</h5>
          <p className="text-secondary mb-20">{job.company_name}</p>
          <div className="d-flex flex-wrap mb-n2 align-items-center">
            <div className="pe-4 mb-2 me-auto">
              <div className="d-inline-flex align-items-center me-6">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7147 12.8807C11.9872 13.6083 10.5196 15.0758 9.41409 16.1813C8.63304 16.9624 7.36824 16.9623 6.58719 16.1813C5.50158 15.0957 4.06111 13.6552 3.28661 12.8807C0.683111 10.2772 0.683111 6.05612 3.28661 3.45262C5.8901 0.849126 10.1112 0.849126 12.7147 3.45262C15.3182 6.05612 15.3182 10.2772 12.7147 12.8807Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.5007 8.16667C10.5007 9.54738 9.38136 10.6667 8.00065 10.6667C6.61994 10.6667 5.50065 9.54738 5.50065 8.16667C5.50065 6.78596 6.61994 5.66667 8.00065 5.66667C9.38136 5.66667 10.5007 6.78596 10.5007 8.16667Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-dark ms-2">{job.location}</span>
              </div>
              <div className="d-inline-flex align-items-center pt-4 pr-4">
                 <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3327 4.83333C10.3327 6.67428 8.8403 8.16667 6.99935 8.16667C5.1584 8.16667 3.66602 6.67428 3.66602 4.83333C3.66602 2.99238 5.1584 1.5 6.99935 1.5C8.8403 1.5 10.3327 2.99238 10.3327 4.83333Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.99935 10.6667C3.77769 10.6667 1.16602 13.2783 1.16602 16.5H12.8327C12.8327 13.2783 10.221 10.6667 6.99935 10.6667Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg><span className="text-dark ms-2">{job.employment_type}</span>
              </div>
              <div className="d-inline-flex align-items-center pt-4">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10.3327 4.83333C10.3327 6.67428 8.8403 8.16667 6.99935 8.16667C5.1584 8.16667 3.66602 6.67428 3.66602 4.83333C3.66602 2.99238 5.1584 1.5 6.99935 1.5C8.8403 1.5 10.3327 2.99238 10.3327 4.83333Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.99935 10.6667C3.77769 10.6667 1.16602 13.2783 1.16602 16.5H12.8327C12.8327 13.2783 10.221 10.6667 6.99935 10.6667Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg><span className="text-dark ms-2">{job.remote}</span>
              </div>          
            </div>
           </div>
        </div>
      </a>
    </div>
  )
}

export default JobCard;
