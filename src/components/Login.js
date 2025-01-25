import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/normalRedux/getUserAction';
import axios from 'axios';
import fetchWatchUsers from '../redux/reduxSaga/fetchUsersSaga';
import { fetchUserRequest } from '../redux/reduxSaga/action';

function Login() {

    //normal redux
    // const {users} = useSelector(state => state)
    // const dispatch = useDispatch();

    //saga redux
    const {users} = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(users);
    

    useEffect(() => {
        dispatch(fetchUserRequest(1))
    }, [])

    // const addUsers = async () => {
    //     const formData = new FormData();
    //     formData.append('user_name', 'Akash12')
    //     formData.append('user_mobile', '7201880073')
    //     formData.append('user_password', 'Akash12@177')
    //     formData.append('user_email', 'akash12@gmail.com')

    //     await axios.post('http://localhost:8080/dev/user/add', formData, {
    //         headers : {
    //             'Content-Type' : 'multipart/form-data',
    //             'Accept' : 'application/json'
    //         }
    //     }).then((res) => {
    //         dispatch(fetchUserRequest())
            
    //     }).catch((err) => {
    //         alert(err)
    //     })
    // }


    const loadMoreDataHandler = () => {
        dispatch(fetchUserRequest(5))
    } 
    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [dispatch])

  return (
    <div>
    <button onClick={loadMoreDataHandler} >add</button>
        {users.length === 0 ? '0' : users.map((i) => {
            return <span>{i?.id} </span>
        })}
    </div>
  )
}

export default Login