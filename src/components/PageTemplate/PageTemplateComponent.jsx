import React from 'react'
import PropTypes from 'prop-types'
import AdSense from 'react-adsense';

const PageTemplateComponent = ({
  children,
}) => {
  return <>
    <div className="pv4">
      <div className="bp-card bp-card--left-arrow">
        {children}
      </div>
      <AdSense.Google
  client='ca-pub-3656827163242001'
  slot='8834536232'
/>
    </div>
  </>
}

PageTemplateComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { PageTemplateComponent }
