import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Rooms = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const getRoom = async () => {
            try {
                const response = await axios.get(`/api/rooms/${id}`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const message = response?.data?.message;
                if (response?.data?.success && message == "Room fetched successfully") {
                    setRoom(response.data.data);
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }

        getRoom();
    }, [id]);

    return (
        <div className='w-full h-screen px-5'>
            <div className='w-full flex items-center justify-center gap-5'>
                <div className="w-full">
                    <h1 className='text-2xl mt-40 mb-4 text-black font-semibold'>{room?.name}</h1>
                    <img className='w-[800px] h-[400px] bg-cover bg-center' src={room?.images?.picture_url} alt="Room Image" />
                    <h1 className='text-xl mt-3 mb-4 text-gray-700 font-semibold'>Brooklyn, NY, United States</h1>
                </div>
                <div className='w-[800px]' style={{
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
                    border: '1px solid rgb(221, 221, 221)',
                    borderRadius: '12px',
                    padding: '24px',
                }}>
                    <span className='text-2xl font-semibold tracking-wider'>${room?.price?.$numberDecimal}.00</span>
                    <p className='text-sm'>Total before taxes</p>
                    <div className='mt-4'>
                        <input type='checkbox' id='terms' name='terms' className='mr-2' />
                        <label htmlFor='terms' className='text-sm'>I agree to the terms and conditions</label>
                    </div>
                    <button className='mt-5 bg-[#ff385c] w-full text-xl py-[10px] rounded-md text-white font-semibold' onClick={() => {
                        toast.success("Successfully Boocked");
                        setTimeout(() => {
                            navigate('/')
                        }, [1000]);
                    }}>Reserve</button>
                    <p className='text-xm text-center mt-2'>You won't be charged yet</p>
                </div>
            </div>
            <p className='text-xl w-[800px] mb-5'>{room?.description}</p>
        </div>
    )
}

export default Rooms;