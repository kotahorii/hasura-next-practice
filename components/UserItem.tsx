import React, { Dispatch, VFC, memo } from 'react'
import { DeleteUserMutationFn, Users } from '../types/generated/graphql'

type Props = {
  user: {
    __typename?: 'users'
  } & Pick<Users, 'id' | 'name' | 'created_at'>
  delete_users_by_pk: DeleteUserMutationFn
  setEditedUser: Dispatch<
    React.SetStateAction<{
      id: string
      name: string
    }>
  >
}

const UserItem: VFC<Props> = ({ user, delete_users_by_pk, setEditedUser }) => {
  return (
    <div className="my-1">
      <span className="mr-2">{user.name}</span>
      <span className="mr-2">{user.created_at}</span>
      <button
        data-testid={`edit-${user.id}`}
        onClick={() => {
          setEditedUser(user)
        }}
        className="mr-1 px-3 text-white bg-green-600 hover:bg-green-700 rounded-2xl focus:outline-none"
      >
        Edit
      </button>
      <button
        className="py-1 px-3 text-white bg-pink-600 hover:bg-pink-700 rounded-2xl focus:outline-none"
        data-testid={`delete-${user.id}`}
        onClick={async () => {
          await delete_users_by_pk({
            variables: {
              id: user.id,
            },
          })
        }}
      >
        Delete
      </button>
    </div>
  )
}
export default memo(UserItem)
