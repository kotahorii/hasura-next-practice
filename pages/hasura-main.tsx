import React, { VFC } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useQuery } from '@apollo/client'
import { GetUsersQuery } from '../types/generated/graphql'
import { GET_USERS } from '../queries/queries'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'cache-and-network',
  })
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
