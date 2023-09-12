"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import bcrypt from "bcryptjs";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    await axios.post("/api/user", {
      name: name,
      email: email,
      password: password,
    });
    setIsLoading(false);
    setName("");
    setEmail("");
    setPassword("");
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Add New User
      </button>

      <div className={isOpen ? "modal modal-open" : "modal bg-white"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New User</h3>
          <form onSubmit={handleSubmit}>
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
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;