import React from 'react'

const Form = () => {
  return (
        <div className="page-header clear-filter" filter-color="orange">
            <div className="page-header-image" style={{backgroundImage:"url(../assets/img/login.jpg)"}}></div>

            <div className="content">
                <div className="container">
                    <div className="col-md-4 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                            <form className="form" method="" action="">
                                <div className="card-header text-center">
                                    <div className="logo-container">
                                        <img src="../assets/img/now-logo.png" alt="" />
                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                            </span>
                                        </div>
                                        <input type="text" placeholder="Password" className="form-control" />
                                    </div>
                                </div>


                                <div className="card-footer text-center">
                                    <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Form