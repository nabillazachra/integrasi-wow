import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { API } from "../config/api";

export default function FormEditProfile() {
  let history = useHistory();
  const { id } = useParams();

  const [form, setForm] = useState({
    email: "",
    gender: "",
    phone: "",
    address: "",
  });

  const getUser = async (id) => {
    try {
      const response = await API.get("/user/" + id);

      setForm({
        ...form,
        email: response.data.data.user.email,
        phone: response.data.data.user.phone,
        gender: response.data.data.user.gender,
        address: response.data.data.user.address,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const formData = new FormData();
      formData.set("email", form.email);
      formData.set("phone", form.phone);
      formData.set("gender", form.gender);
      formData.set("address", form.address);

      const response = await API.patch("/user/" + id, formData, config);
      console.log(response.data.data.user);
      history.push("/profile");
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    getUser(id);
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Gender"
            name="gender"
            onChange={handleChange}
            value={form.gender}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={form.phone}
            className="form-control"
            placeholder="Mobile Phone"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="address"
            onChange={handleChange}
            value={form.address}
            className="form-control"
            placeholder="Address"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-5 mt-2 text-end">
          <button type="submit" className="btn-reg auto">
            Edit Profile
          </button>
        </div>
      </form>
    </>
  );
}
