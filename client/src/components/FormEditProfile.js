import React from "react";

export default function FormEditProfile() {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="email"
            name="email"
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
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="telephone"
            className="form-control"
            placeholder="Mobile Phone"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="address"
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
