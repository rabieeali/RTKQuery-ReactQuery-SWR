import { useRef, FormEvent } from 'react'
import { useAddUserMutation, useUsersQuery } from '../app/api/usersApi'


const AddNewUser = () => {
    const [addUser] = useAddUserMutation()
    // const { refetch } = useUsersQuery()


    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const newUser = inputRef.current?.value

        if (!!newUser) {
            await addUser({ id: Math.random(), name: newUser })
            // await refetch()
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input ref={inputRef} className='add_user_input' placeholder='Add a New User...' />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddNewUser