import useSWR from 'swr';
import { Post } from 'src/types';
import Card from 'src/components/Card';
import Spinner from 'src/components/Spinner';
import Alert from 'src/components/Alert';

const BasicPage = () => {
  const { data: allPosts, error, isLoading } = useSWR('/posts');

  if (isLoading) return <Spinner />;
  if (error) return <Alert message={error.message} />;

  return (
    <div className='row g-2'>
      <h1>Basic Fetch With SWR (loading,success,error)</h1>
      {allPosts.map((post: Post) => (
        <div className='col-md-3' key={post.id}>
          <Card id={post.id} body={post.body} title={post.title} />
        </div>
      ))}
    </div>
  );
};

export default BasicPage;
