import React, { useState } from 'react';
import useFetchJobs from "./userFetchJobs";
import {Container} from "react-bootstrap";
import Job from './Job';
import JobPagination from "./JobPagination";

function App() {

    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);

    const { jobs, loading, error } = useFetchJobs(params, page);

    return (
        <Container className="my-4">
            <h1 className="mb-4">Github Jobs</h1>
            <JobPagination page={page} setpage={setPage}/>
            { loading && <h1>Loading...</h1>}
            { error && <h1>Error! Try again</h1>}
            {jobs.map(job => {
                return <Job key={job.id} job={job} />
            })}
            <JobPagination page={page} setpage={setPage}/>
        </Container>
    );
}

export default App;
