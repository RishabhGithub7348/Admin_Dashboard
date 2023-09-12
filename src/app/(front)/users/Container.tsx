"use client"
import React,{useState} from 'react'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import { EyeIcon } from 'lucide-react'
import bcrypt from "bcryptjs";
type Props = {}

const Container = (data: any) => {
    const users = data.users;
    console.log(users);

    const [showPasswords, setShowPasswords] = useState('');

   

    const handlePassword = (password:any,showPasswords:any) => {
        if(showPasswords === ''){
            setShowPasswords(password);
        
        }
        
        if(showPasswords === password){
            setShowPasswords('')
        }
       
    }
    
  return (
    <div  data-theme="light" >
    <div className="mb-2 mt-9 p-5" data-theme="light">
      <AddUser />
    </div>

    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user:any, index:number) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <div className='flex gap-3 flex-row'>
              {showPasswords === "" ? '*******' : showPasswords}

                <EyeIcon className='cursor-pointer' 
                size={20}
                color='#000'
                style={{marginTop:'-5px'}}
                onClick={() => handlePassword(user.password,showPasswords)}/>
                </div>
              </td>
            <td className="flex justify-center space-x-1">
              <UpdateUser user={user} />
              <DeleteUser user={user} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    
  </div>
  )
}

export default Container