import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/normalRedux/getUserAction';
import axios from 'axios';

function Login() {

    const {users} = useSelector(state => state)
    const dispatch = useDispatch();

    const addUsers = async () => {
        const formData = new FormData();
        formData.append('user_name', 'Akash12')
        formData.append('user_mobile', '7201880073')
        formData.append('user_password', 'Akash12@177')
        formData.append('user_email', 'akash12@gmail.com')

        await axios.post('http://localhost:8080/dev/user/add', formData, {
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Accept' : 'application/json'
            }
        }).then((res) => {
            dispatch(getUsers())
            
        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

  return (
    <div>
    <button onClick={addUsers}>add</button>
        {users.length === 0 ? '0' : users.map((i) => {
            return <span>{i?.user_name}</span>
        })}
    </div>
  )
}

export default Login