import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from '../component/serviceCard';
import StudentHome from '../component/student_home';
import Private_teacher from '../component/private_teacher';

const PrivateHome = () => {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (store.currentUser == null) history('/login');
    if (store.currentUser?.user?.profile?.services?.length == 0) history('/preferences');
    actions.loadProfile();
  }, [])

  useEffect(() => {
    if (store.currentUser == null) history('/login');
    actions.loadProfile();
  }, [store.currentUser])

  return (
    <>
    {
      store.rol === 'Student' ? (
        <StudentHome />
      )
      :
      (
        <Private_teacher />
      )
    }
    </>
  )
}

export default PrivateHome
