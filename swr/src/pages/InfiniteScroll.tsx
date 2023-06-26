import { useRef, useCallback } from 'react';
import Alert from 'src/components/Alert';
import Card from 'src/components/Card';
import Spinner from 'src/components/Spinner';
import { Post } from 'src/types';
import useSWRInfinite from 'swr/infinite';

const InfiniteScrollPage = () => {
  const getKey = (pageIndex: number, previousPageData: Post[] | null) => {
    if (previousPageData && !previousPageData.length) return null;
    if (pageIndex === 0) return '/posts?_page=1';
    return `/posts?_page=${pageIndex + 1}`;
  };
  const {
    data: posts,
    size,
    setSize,
    isLoading,
    error,
    isValidating,
  } = useSWRInfinite(getKey);

  const totalPages = 10;

  let totalPosts = 0;
  if (posts) {
    for (let i = 0; i < posts.length; i++) {
      totalPosts += posts[i]?.length || 0;
    }
  }

  const hasNextPage = size < totalPages;

  const intObserver = useRef<IntersectionObserver | null>(null);

  const lastPostRef = useCallback(
    (post: HTMLElement | null) => {
      if (isLoading || !hasNextPage) return;

      if (intObserver.current) {
        intObserver.current.disconnect();
      }

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize((prevSize) => prevSize + 1);
        }
      });

      if (post) {
        intObserver.current.observe(post);
      }
    },
    [isLoading, hasNextPage, setSize]
  );

  if (isLoading) return <Spinner />;
  if (error) return <Alert message={error.message} />;

  return (
    <>
      <div className='row g-2'>
        <h1>Infinite Scroll</h1>
        <strong>{totalPosts} Posts Loaded</strong>
        {posts?.map((post: Post[], index: number) => {
          return post.map((p: Post, innerIndex: number) => (
            <div className='col-md-3' key={p.id}>
              {index === posts.length - 1 && innerIndex === post.length - 1 ? (
                <Card
                  ref={lastPostRef}
                  id={p.id}
                  body={p.body}
                  title={p.title}
                />
              ) : (
                <Card id={p.id} body={p.body} title={p.title} />
              )}
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
    </>
  );
};

export default InfiniteScrollPage;
