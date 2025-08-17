import { useLoaderData } from 'react-router-dom'

const JobDetail = () => {

    const jobDetail = useLoaderData();

  return (
    <div className='job-detail'>
        <p> <b> Title : </b> {jobDetail.title} </p>
        <p> <b> Salary : </b> {jobDetail.salary} </p>
        <p> <b> Location : </b> {jobDetail.location} </p>
        <button> Apply Now </button>
    </div>
  )
}

export default JobDetail

export const JobDetailLoader = async ({ params }) => {
    const {id} = await params;
    if (!id) throw new Error('Job not found');
    const res = await fetch(`http://localhost:5000/jobs/${id}`);
    return res.json();
}