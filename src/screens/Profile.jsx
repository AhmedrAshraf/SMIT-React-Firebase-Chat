import { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../database/firebase.config';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const defaultImg = "https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif"

export default function Profile() {
    const [userInfo, setUserInfo] = useState({});
    const [userName, setName] = useState('');

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        let uid = await localStorage.getItem("userId")
        if (uid !== null) {
            getDoc(doc(db, "users", uid)).then((docSnap) => {
                setUserInfo(docSnap.data())
                setName(docSnap.data().name)
            })
        }
    }

    const handleImgUpload = async (e) => {
        let uri = URL.createObjectURL(e.target.files[0])
        setUserInfo({ ...userInfo, img: uri })
        const storageRef = ref(storage, `images/${userInfo.uid}/dp`);
        await uploadBytes(storageRef, e.target.files[0])
        let url = await getDownloadURL(storageRef)
        setUserInfo({ ...userInfo, img: uri })
        updateDoc(doc(db, "users", userInfo.uid), { img: url, name: userName })
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <Navbar />

            <label htmlFor="imgUpload">
                <img src={userInfo?.img || defaultImg} alt="" className="h-52 w-52 object-cover rounded-full" />
                <input onChange={handleImgUpload} type="file" name="" id="imgUpload" className="hidden" />
            </label>


            <div className="mb-4 w-10/12">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Full Name
                </label>
                <input
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                    placeholder="Enter your email"
                    required
                    value={userName}
                />
            </div>

        </div>
    )
}