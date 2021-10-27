import React, { VFC } from 'react'
import { useCreateForm } from '../hooks/useCreateForm'
import Child from './Child'

const CreateUser: VFC = () => {
  const {
    handleSubmit,
    username,
    usernameChange,
    printMsg,
    text,
    handleTextChange,
  } = useCreateForm()
  return (
    <>
      {console.log('createUser rendered')}
      <p className="mb-3 font-bold">Custom Hook + useCallback + memo</p>
      <div className="mb-3 flex flex-col justify-center items-center">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="px-3 py-2 border border-gray-300"
        />
      </div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="New user ?"
          type="text"
          value={username}
          onChange={usernameChange}
        />
        <button
          type="submit"
          className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        >
          Submit
        </button>
        <Child printMsg={printMsg} handleSubmit={handleSubmit} />
      </form>
    </>
  )
}

export default CreateUser
