const apiKey = process.env.REACT_APP_API_KEY

export const searchJobs = async (query, country, state, remote) => {
  let location = '';
  if(remote === 'Either'){
    remote = '';
  }else if(remote === 'Remote'){
    remote = 'true'
  }else{
    remote = 'false'
  }
  
  if(country.name){
    location = location + country.name;
    location = location.replaceAll(' ', '+');
  }
  if(state){
    location = location + '+' + state;
    location = location.replaceAll(' ', '+');
  }
  try {
    const response = await fetch (`https://cors-anywhere.herokuapp.com/https://findwork.dev/api/jobs/?location=${location}&remote=${remote}&search=${query}` , {
        headers: {
          Authorization: `Token ${apiKey}`
        }
      });
    const jobs = await response.json();
    console.log(jobs);
    return jobs.results;
  }catch(error){
    console.log(error);
  }

  
}
