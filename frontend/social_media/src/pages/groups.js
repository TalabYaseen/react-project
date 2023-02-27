import React from 'react'
import Group from '../components/Group'
import Navbar from '../components/navbar'
import Rightbar from '../components/rightbar'
import Sidebar from '../components/sidebar'

function Groups() {
  return (
    <div>
        <div>
          <div className="theme-layout">
           <Navbar/>
            <section>
              <div className="page-header">
                <div className="header-inner">
                  <h2>your Searched Groups</h2>
                  <nav className="breadcrumb">
                    <a href="index-2.html" className="breadcrumb-item"><i className="fa fa-home" /></a>
                    <span className="breadcrumb-item active">Groups</span>
                  </nav>
                </div>
              </div>
            </section>
            <section>
              <div className="gap gray-bg">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row" id="page-contents">
                       <Sidebar/>
                        <div className="col-lg-6">
                         <Group/>
                       {/* centerl meta */}
                        <div className="col-lg-3">

                             </div>
                            </div>
                        <Rightbar/>
                     
                      </div>	
                    </div>
                  </div>
                </div>
              </div>	
            </section>
           
            <div className="bottombar">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span> */}
                
                  </div>
                </div>
              </div>
            </div>
          </div>
         	
        </div>
    </div>
  )
}

export default Groups




