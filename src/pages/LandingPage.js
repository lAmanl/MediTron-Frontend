import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Vector from "../assets/img/landingPage/vector.jpg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";
import Calendar from "../assets/img/dashboard/calendar.png"
import Doctor from "../assets/img/dashboard/doctor.png"
import Report from "../assets/img/dashboard/report2_pbl.png"
import Admin from "../assets/img/dashboard/admin_profile.png"
import Auth from "../assets/img/dashboard/minus2_pbl.png"

export default function LandingPage(props) {
  return (
    <div className="h-screen max-h-min bg-bgsecondary flex flex-col">
      <Navbar></Navbar>

      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <img
          src={Vector}
          alt="Graphics"
          className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
        />
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login
            setToastShow={props.setToastShow}
            settoastCondition={props.settoastCondition}
          ></Login>
        </div>
      </div>
      <div className="h-screen max-h-min bg-bgsecondary flex flex-col">
        <div className='text-center mt-5' style={{ marginBottom: '7%' }}>
          <h1 className='display-5'><b>Features</b></h1>
        </div>
        <div className='ms-5 row'>
          <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>In-Patient Management</b></h5>
                  <p class="card-text">Manage records of in-patients along with their general, admission details, bed number and case scenario.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1'></div>
          <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt="" height={100} width={100}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Out-patient Management</b></h5>
                  <p class="card-text">Manage records in-patients along with the services received, payments made and lab reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ms-5 row'>
          <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Doctor} class="img-fluid rounded-start m-3 p-1" alt="" height={100} width={100}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Doctor Management</b></h5>
                  <p class="card-text">Manage doctors profile, their availiability and appointments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1'></div>
          <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Report} class="img-fluid rounded-start m-3 p-1" alt="" height={100} width={100}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Reports Management</b></h5>
                  <p class="card-text">Manage patient's reports, the prescription and treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ms-5 row'>
          <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Auth} class="img-fluid rounded-start mb-5 p-1" alt="" height={100} width={100}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Authentication</b></h5>
                  <p class="card-text">Doctor, patient and admin needs authentication to login to their respective accounts which is their id and password.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1'></div>
          <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Admin} class="img-fluid rounded-start m-3 p-1" alt="" height={100} width={100}></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Administration</b></h5>
                  <p class="card-text">Admin can administrate everything, they can delete doctor profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
