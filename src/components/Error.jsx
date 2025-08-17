import { useRouteError,useNavigate } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();

  return (
    <div>
      <h2> An error occurred </h2>
      <p>{error.message}</p>
      <button onClick={()=>navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Error