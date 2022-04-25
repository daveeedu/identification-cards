import React, { useEffect, useState } from "react";

export default function UserData() {
  const [user, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        fetchUsers(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="display-1 fw-bold text-danger">User Data</h1>

      {user.map((user) => (
        <div className="container" key={user.id}>
          <div className="row ">
            <div className="my-5 card col-md-8 border-0 cards text-start ">
              <div className="card-body">
                <div className="card-title">
                  <h5 className="card-title display-5 fw-bold">{user.name}</h5>
                </div>
                <div>
                  <p className="text-secondary fw-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam 
                    doloremque, dolore, quisquam quis quisquam quisquam quisquam quisquam
                    Lorem ipsum dolor.
                  </p>
                </div>
                <div className="card-content">
                  <div className="">
                    <h3 className="my-4 fst-italic fw-bold">General Info</h3>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p>User Name</p>
                      <p>Email</p>
                      <p>Address</p>
                      <p>Zip Code</p>
                      <p>Phone</p>
                      <p>Website</p>
                      <p>Company</p>
                      <p>Catch Phrase</p>
                      <p>Bs</p>
                    </div>
                    <div className="col-8">
                      <p className="text-secondary ff">{user.username}</p>
                      <p className="text-secondary ff">{user.email}</p>
                      <p className="text-secondary ff">{user.address.street}, {user.address.suite}, {user.address.city}</p>
                      <p className="text-secondary ff">{user.address.zipcode}</p>
                      <p className="text-secondary ff">{user.phone}</p>
                      <p className="text-secondary ff">{user.website}</p>
                      <p className="text-secondary ff">{user.company.name}</p>
                      <p className="text-secondary ff">{user.company.catchPhrase}</p>
                      <p className="text-secondary ff">{user.company.bs}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
