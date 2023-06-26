import useSWR from 'swr'
import { Post } from 'src/types'
import Card from 'src/components/Card'

const BasicPage = () => {

    const { data: allPosts, error, isLoading } = useSWR('/posts')

    if (isLoading) return <div className="spinner-border position-absolute m-auto" role="status"></div>
    if (error) return <div className="alert alert-danger" role="alert">{error.message}</div>

    return (
        <div className='row g-2'>
            <h1>Basic Fetch With SWR (loading,success,error)</h1>
            {allPosts.map((post: Post) => (
                <div className='col-md-3' key={post.id}>
                    <Card id={post.id} body={post.body} title={post.title} />
                </div>
            ))}
        </div>
    )
}

export default BasicPage