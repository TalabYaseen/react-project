import React from 'react'

function CreateGroup() {
  return (
    <div>
            <div className="central-meta">
            <div className="editing-info">
              <h5 className="f-title"><i className="ti-info-alt" /> Create New Group</h5>
              <form >
                <div className="form-group half">	
                  <input type="text" id="input" required="required" />
                  <label className="control-label" htmlFor="input">Group Name</label><i className="mtrl-select" />
                </div>
              
               
                <div className="form-group">	
                  <input type="text" required="required" />
                  <label className="control-label" htmlFor="input">Gescription </label><i className="mtrl-select" />
                </div>
                <div className="dob">
                 
                   
              
                  <div className="form-group">
                    <select>
                      <option value="year">Add Frinds</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-radio">
                  <div className="radio">
                    <label>
                      <input type="radio" defaultChecked="checked" name="radio" /><i className="check-box" />Public
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="radio" /><i className="check-box" />Private
                    </label>
                  </div>
                </div>

                {/* uploade cover for group  */}
                <div className="form-group">	
                  {/* <textarea rows={4} id="textarea" required="required" defaultValue={""} /> */}
                  <label className="control-label" htmlFor="textarea">Add Cover Page </label><i className="mtrl-select" />
                  <br/>
                  
                 
                  <label className="fileContainer"> 
                  <i className="fa fa-image" style={{color:"green"}}/>
                            <input type="file"/>
                  </label>
            
                                              
                </div>

                {/* ////////////uploade cover for group  */}
                <div className="submit-btns">
                  {/* <button type="button" className="mtr-btn"><span>Cancel</span></button> */}
                  <button type="button" className="mtr-btn"><span>Create</span></button>
                </div>
              </form>
            </div>
          </div>	
    </div>
  )
}

export default CreateGroup
