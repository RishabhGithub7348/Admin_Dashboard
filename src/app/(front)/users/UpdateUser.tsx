"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const UpdateUser = ({
  
  user,
}: {
  user: User;
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  let [password, setPassword] = useState(user.password);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    await axios.patch(`/api/user/${user.id}`, {
      name: name,
      email: email,
      password: password,
    });
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {user.name}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                placeholder="Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                placeholder="Email"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                placeholder="Password"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isLoading ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;