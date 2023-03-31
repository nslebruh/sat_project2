import {useState} from "react"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col bg-neutral-400 h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="w-96 h-2/3 flex flex-col bg-neutral-600 rounded-lg">
          <div className="justify-center flex text-5xl mt-12">
            ThreadTracker
          </div>
          <form className="h-full flex flex-col justify-center">
            <label htmlFor="username" className="ml-8 pb-1">Username</label>
            <input type="text" id="username" placeholder="Username" className="h-12 rounded-lg mx-6 mb-6 text-base p-4" onChange={(e) => {setUsername(e.target.value)}}/>
            <label htmlFor="password" className="ml-8 pb-1">Password</label>
            <input type="text" id="password" placeholder="Password" className="h-12 rounded-lg mx-6 mb-6 text-base p-4" onChange={(e) => {setPassword(e.target.value)}}/>
            <button className="h-10 mb-2 rounded-lg mx-4 bg-blue-600" onClick={(e) => {e.preventDefault(); console.log("Login button clicked")}}>Login</button>
            <button className="h-10 mt-2 rounded-lg mx-4 bg-blue-600" onClick={(e) => {e.preventDefault(); console.log("Register button clicked")}}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login