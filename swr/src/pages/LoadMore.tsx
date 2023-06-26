/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from 'src/api';
import Alert from 'src/components/Alert';
import Card from 'src/components/Card';
import Spinner from 'src/components/Spinner';
import { Post } from 'src/types';
import useSWRInfinite from 'swr/infinite';

const LoadMorePage = () => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `/posts?_page=${pageIndex + 1}`; // SWR key
  };

  const {
    data: posts,
    size,
    setSize,
    isLoading,
    error,
    isValidating,
  } = useSWRInfinite(getKey, fetcher, { initialSize: 1 });

  const toatalPages = 10;

  let totalPosts = 0;
  if (posts) {
    for (let i = 0; i < posts?.length; i++) {
      totalPosts += posts[i]?.length || 0;
    }
  }

  if (isLoading) return <Spinner />;
  if (error) return <Alert message={error.message} />;

  return (
    <>
      <div className='row g-2'>
        <h1>Load More</h1>
        <strong>{totalPosts} Posts Loaded</strong>
        {posts?.map((post: Post[]) => {
          return post.map((p: Post) => (
            <div className='col-md-3' key={p.id}>
              <Card id={p.id} body={p.body} title={p.title} />
            </div>
          ));
        })}
      </div>

      {isValidating && (
        <div
          style={{ inset: 0 }}
          className='spinner-border d-block m-auto my-3'
          role='status'></div>
      )}
      <hr />

      <div className='d-flex justify-content-center gap-1 align-items-center'>
        <button
          disabled={size === toatalPages}
          className='btn btn-sm btn-primary'
          onClick={() => setSize(size + 1)}>
          Load More
        </button>
      </div>
    </>
  );
};

export default LoadMorePage;
