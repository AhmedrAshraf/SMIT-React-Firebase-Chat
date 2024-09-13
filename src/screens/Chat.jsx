import moment from "moment";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";

export default function Home() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [message, setMessage] = useState([])
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        const q = query(
            collection(db, "chat"),
            where(state.uid, "==", true),
            where(state.myUid, "==", true));

        const unsubscribe = onSnapshot(q, (docSnap) => {
            const list = [];
            docSnap.forEach((doc) => {
                list.push(doc.data());
            });
            const sortList = list.sort((a, b) => a.createdAt - b.createdAt)
            setChatList(sortList)
        });

        return () => unsubscribe()
    }, [])

    const sendMsg = async () => {
        addDoc(collection(db, "chat"), {
            message,
            [state.uid]: true,
            [state.myUid]: true,
            senderUid: state.myUid,
            createdAt: Date.now()
        })
        setMessage("")
    }

    return (
        <div>
            <div className="bg-[#0f546f] w-full p-6 flex items-center uppercase">
                <img src="https://cdn-icons-png.freepik.com/256/10117/10117587.png?semt=ais_hybrid" alt="" className="w-10 mr-10 cursor-pointer" onClick={() => navigate('/home')} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtNBgCacCwHhxVPj1ubPRygdT7X_7w_UrLQ&s" alt="" className="w-10 mr-4 rounded-full" />
                <h1 className="text-2xl font-bold text-white">{state.name}</h1>
            </div>

            <div className="bg-gray-100 h-[83vh]">
                {chatList.map((item, index) => (
                    <div key={index} onClick={() => navigate('/chat', { state: { ...item, myUid } })} className={`w-full flex px-10 ${item.senderUid == state.myUid ? 'justify-end' : 'justify-start'}`}>
                        <div className=" shadow-md border border-black bg-blue-50 shadow-gray-300 rounded-md mt-4 py-5 px-10 ">
                            <h1 className="font-semibold text-xl">{item.message}</h1>
                            <h1 className="text-gray-700">{moment(item.createdAt).startOf('seconds').fromNow()}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center pt-5">
                <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter Message" className="w-10/12 border border-gray-500 rounded-lg px-6 py-2 text-xl" />
                <button onClick={sendMsg} className="text-xl w-40 py-2 ml-2 rounded-lg bg-red-200 text">Send</button>
            </div>
        </div>
    )
}
