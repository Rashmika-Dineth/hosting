import React, {useState} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {gql, useMutation} from "@apollo/client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const INSERT_USER = gql`
  mutation InsertUsers($name: String, $email: String, $password: String) {
    insert_users(objects: {name: $name, email: $email, password: $password}) {
      affected_rows
      returning {
        name
        email
        password
        id
      }
    }
  }
`;

function SignupScreen() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConformation, setUserPasswordConformation] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validateEmail = (email) => {
    if (!email) {
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return false;
    }
    return true;
  };

  const CleanUpFormData = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setUserPasswordConformation("");
  };

  const [addUsers] = useMutation(INSERT_USER, {
    variables: {
      name: userName,
      email: userEmail,
      password: userPassword,
    },
  });

  const RegisterFunction = () => {
    if (validateEmail(userEmail)) {
      addUsers();
      // console.log(userName, userEmail, userPassword, userPasswordConformation);
      CleanUpFormData();
    } else {
      handleOpen();
    }
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{borderRadius: "25px"}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    onChange={(e) => setUserName(e.target.value)}
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    value={userName}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    onChange={(e) => setUserEmail(e.target.value)}
                    onFocus={() => validateEmail(userEmail)}
                    label="Your Email"
                    id="form2"
                    type="email"
                    value={userEmail}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    onChange={(e) => setUserPassword(e.target.value)}
                    label="Password"
                    id="form3"
                    type="password"
                    value={userPassword}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    onChange={(e) =>
                      setUserPasswordConformation(e.target.value)
                    }
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    value={userPasswordConformation}
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn
                  onClick={() => RegisterFunction()}
                  className="mb-4"
                  size="lg"
                >
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email Validation
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            Please enter a correct email
          </Typography>
          <button onClick={() => handleClose()}> OK</button>
        </Box>
      </Modal>
    </>
  );
}

export default SignupScreen;
