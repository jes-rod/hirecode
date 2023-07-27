const apiKey = process.env.REACT_APP_API_KEY

export const searchJobs = async (query, country, state, remote) => {
  let location = '';
  let rem = ''
  if(remote === 'Either'){
    rem = '';
  }else if(remote === 'Remote'){
    rem = 'true'
  }else{
    rem = 'false'
  }
  console.log(rem);
  
  if(country.name){
    location = location + country.name;
    location = location.replaceAll(' ', '+');
  }
  if(state){
    location = location + '+' + state;
    location = location.replaceAll(' ', '+');
  }
  try {
    const response = await fetch (`https://corsrepo-jes-rod.vercel.app` , {
        headers: {
          Authorization: `Token ${apiKey}`,
          'Target-URL': `https://findwork.dev/api/jobs/?location=${location}&remote=${rem}&search=${query}`
        }
      });
    const jobs = await response.json();
    console.log(jobs);
    return jobs.results;
  }catch(error){
    console.log(error);
    alert('Internal server error');
    return [];
  }

  
}
