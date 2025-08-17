import {useLoaderData,Link} from 'react-router-dom'

const Jobs = () => {
       const jobs = useLoaderData();
  return (
    <div className="jobs">
       { jobs.map((job)=>{ 
        return (
         <div className="job" key={job.id}>
           <Link to={`${job.id.toString()}`}>
            <h6> {job.title} </h6>
            <p> {job.location} </p>
          </Link>
         </div>
        )
       })}
    </div>
  )
}

export default Jobs

export const JobsLoader = async() => {
    const response = await fetch('http://localhost:5000/jobs');
    const jobs = await response.json();
    return jobs;
}


