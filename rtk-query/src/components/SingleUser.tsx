import { useDeleteUserMutation, useUserQuery } from "../app/api/usersApi"


const SingleUser = ({ id }: { id: number }) => {

    const { data: user, isError, isLoading, isFetching, isSuccess } = useUserQuery(id)

    const [deleteUser] = useDeleteUserMutation()

    const deleteHandler = async (id: number) => {
        await deleteUser(id)
    }
    return (
        <>
            {isLoading && (<p style={{ color: "red" }}>Loading ...</p>)}
            <div>
                <p>{user?.name}</p>
                <button onClick={() => deleteHandler(id)}>Delete</button>
            </div>
        </>
    )
}

export default SingleUser