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
  
  if(country.name){
    location = location + country.name;
    location = location.replaceAll(' ', '+');
  }
  if(state){
    location = location + '+' + state;
    location = location.replaceAll(' ', '+');
  }
  if(!(location === '') && (rem === 'true' || rem === '')) {
    try {
    const response1 = await fetch (`https://corsrepo-jes-rod.vercel.app/api` , {
        headers: {
          Authorization: `Token ${apiKey}`,
          'Target-URL': `https://findwork.dev/api/jobs/?location=${location}&remote=${rem}&search=${query}`
        }
      });
    const jobs1 = await response1.json();
    const response2 = await fetch (`https://corsrepo-jes-rod.vercel.app/api` , {
        headers: {
          Authorization: `Token ${apiKey}`,
          'Target-URL': `https://findwork.dev/api/jobs/?location=&remote=${rem}&search=${query}`
        }
      });
    const jobs2 = await response2.json();
    const jobs = [...jobs1.results, ...jobs2.results];
    return (jobs);
  }catch(error){
    console.log(error);
  }
  }else{
    try {
    const response = await fetch (`https://corsrepo-jes-rod.vercel.app/api` , {
        headers: {
          Authorization: `Token ${apiKey}`,
          'Target-URL': `https://findwork.dev/api/jobs/?location=${location}&remote=${rem}&search=${query}`
        }
      });
    const jobs = await response.json();
    return jobs.results;
  }catch(error){
    console.log(error);
  }
  }
  
}
