import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()


    const handleLogout = () => {
        localStorage.removeItem("userId")
        navigate('/login')
    }

    return (
        <div className="text-2xl bg-[#0f546f] w-full py-6 px-20 mb-16 flex justify-between text-white">
            <h1 className="font-semibold">React-SMIT</h1>
            <div className="flex gap-8 font-thin text-lg">
                <Link to={'/'}>Home</Link>
                <Link to={'/chatList'}>Chat</Link>
                <Link to={'/Location'}>Location</Link>
                <Link to={'/marketPlace'}>MarketPlace</Link>
                <Link to={'/imgSwap'}>Face Swap</Link>
                <Link to={'/Profile'}>Profile</Link>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
