import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { User } from "../../models/users.model"


export const usersApi = createApi({
    reducerPath: "usersApi",
    tagTypes: ["User"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        users: builder.query<User[], void>({
            query: () => "/users",
            providesTags: ["User"]
        }),
        user: builder.query<User, number>({
            query: (id) => `/users/${id}`,
            providesTags: ["User"]
        }),
        addUser: builder.mutation<void, User>({ // usually you want it as a model of User
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),
        updateUser: builder.mutation<void, User>({
            query: ({ id, ...rest }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["User"]
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["User"]
        })
    })
})



export const {
    useUsersQuery,
    useUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi