import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Calendar from '../../assets/img/dashboard/calendar.png'
import Doctor from '../../assets/img/dashboard/doctor.png'

const Features = () => {
  return (
      <div className='bg-bgsecondary'>
        <Navbar />
          <div className='text-center mt-5' style={{ marginBottom: '7%' }}>
              <h1 className='display-5'><b>Features</b></h1>
          </div>
          <div className='ms-5 row'>
              <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px"}}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-1'></div>
              <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Doctor} class="img-fluid rounded-start m-3 p-1" alt="" height={100} width={100}></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='ms-5 row'>
              <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-1'></div>
              <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='ms-5 row'>
              <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start mb-5 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-1'></div>
              <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='ms-5 row mb-5'>
              <div class="card mb-5" style={{ maxWidth: 540, marginLeft: '5%', borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-1'></div>
              <div class="card mb-5 ms-5" style={{ maxWidth: 540, borderRadius: "25px" }}>
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src={Calendar} class="img-fluid rounded-start m-3 p-1" alt=""></img>
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <Footer />
    </div>
  )
}

export default Features