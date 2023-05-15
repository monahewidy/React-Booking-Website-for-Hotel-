import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllUser, register } from "../../store/actions/loginRegister";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./register.css";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
    userPhone: "",
    userEmail: "",
  });
  const allUsers = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Dispatch getAllUser to get all users from the database
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleRegistration = (e) => {
    e.preventDefault();

    // Check if the email already exists
    const isEmailExist = allUsers.find(
      (user) => user.userEmail === userData.userEmail
    );
    if (isEmailExist) {
      alert("Email already exists");
      return;
    }

    // Dispatch register action to register new user
    dispatch(register(userData));
    localStorage.setItem("currentUser", JSON.stringify(userData));
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div id="appRegister">
      <Form onSubmit={handleRegistration} id="register">
        <Form.Group controlId="formBasicName" id="lContainer">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={userData.userName}
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" id="lContainer">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userData.userEmail}
            onChange={(e) =>
              setUserData({ ...userData, userEmail: e.target.value })
            }
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPhone" id="lContainer">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            value={userData.userPhone}
            onChange={(e) =>
              setUserData({ ...userData, userPhone: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" id="lContainer">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={userData.userPassword}
            onChange={(e) =>
              setUserData({ ...userData, userPassword: e.target.value })
            }
          />
          <Form.Check
            type="checkbox"
            label="Show password"
            onClick={() => setShowPassword(!showPassword)}
            id="showPasswordCheckbox"
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="lButton">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterComponent;
