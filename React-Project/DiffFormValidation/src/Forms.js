import React, { useState } from "react";

function Forms() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation and update errors
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.length < 3
          ? "Username must be at least 3 characters long"
          : "";
      case "email":
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters long"
          : "";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if there are no errors before submitting
    if (Object.values(errors).every((error) => error === "")) {
      // Perform form submission logic here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.username}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
