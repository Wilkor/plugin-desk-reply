import React from 'react'
import Proptypes from 'prop-types'


export const PageHeaderComponent = ({ title, logo }) => (
    <>

    
        <div className="header">
 
            <div className="dt dt--fixed">
                <div className="dtc tl v-mid w-90"> 
            </div>
            <div className="dtc w-00">
                <div className="dt dt--fixed">
                    <div id="logo-area" className="dt-row tc">
                        {logo && (<>
                            <img
                                id="logo-img"
                                className="logo-img"
                                src={logo}
                                alt="Uma empresa parceira takeBlip"
                                class="w-20"
                                style={{marginTop:'10px', marginLeft:'95px'}}
                            />
                            <span className="bp-c-city" style={{fontSize:'10px'}}>Version: 1.0</span>
                        </>
                        )}<br></br>
                        
                    </div>
                </div>
            </div>
        </div>
     
    </div>

    
  </>
)

PageHeaderComponent.propTypes = {
  title: Proptypes.string,
}
