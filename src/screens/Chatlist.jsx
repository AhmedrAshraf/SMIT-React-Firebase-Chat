import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function chatList() {
  const [myUid, setUid] = useState('')
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    let uid = await localStorage.getItem("userId")
    setUid(uid)
    const list = []
    const dbSnap = await getDocs(query(collection(db, 'users'), 
    // where("uid", "!=", uid)
  ))
    dbSnap.forEach(item => list.push(item.data()))
    setUsers(list)
  }

  return (
    <div>
      <Navbar />

      {users.map(item => (
        <div key={item.uid} onClick={() => navigate('/chat', { state: { ...item, myUid } })} className="cursor-pointer w-11/12 shadow-md border border-black bg-blue-50 shadow-gray-300 rounded-md mx-auto my-4 py-5 px-10 flex justify-between">
          <div className="flex items-center">
            <img src={item.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtNBgCacCwHhxVPj1ubPRygdT7X_7w_UrLQ&s"} alt="" className="w-16 mr-4 rounded-full border-2 border-gray-500" />
            <div>
              <h1 className="uppercase font-semibold text-xl">{item.name}</h1>
              <h1 className="text-gray-600">{item.email}</h1>
            </div>
          </div>
          <button>Message</button>
        </div>
      ))}

    </div>
  )
}
