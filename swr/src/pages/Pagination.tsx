import { useState, useEffect } from 'react';
import { fetcher } from 'src/api';
import Alert from 'src/components/Alert';
import Card from 'src/components/Card';
import Spinner from 'src/components/Spinner';
import { Post } from 'src/types';
import useSWR, { preload } from 'swr'


const PaginationPage = () => {
    // ** IMPORTANT **  how do we know how many pages are in total? it's much better to ask your backend developer to send you total,
    // ** but if your api supports you need to make a dummy fetch ang get all the data's length
    // ** lets say that we already know it is 100 posts in total and 10 pages

    const [pageIndex, setPageIndex] = useState(1);
    const { data: tenPosts, isLoading, error } = useSWR(`/posts?_page=${pageIndex}`);
    const totalPages = 10

    useEffect(() => {
        if (pageIndex < totalPages) {
            preload(`/posts?_page=${pageIndex + 1}`, fetcher)
        }
    }, [pageIndex])

    if (isLoading) return <Spinner />;
  if (error) return <Alert message={error.message} />;

    return (
        <>
            <div className='row g-2'>
                <h1>Pagination With Prefetching</h1>
                {tenPosts?.map((post: Post) => (
                    <div className='col-md-3' key={post.id}>
                        <Card id={post.id} body={post.body} title={post.title} />
                    </div>
                ))}
            </div>

            <hr />
            <div className='d-flex justify-content-center gap-1 align-items-center'>
                <button disabled={pageIndex <= 1} className='btn btn-sm btn-primary' onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
                <button disabled={pageIndex === totalPages} className='btn btn-sm btn-primary' onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
            </div>
        </>
    )
}

export default PaginationPage