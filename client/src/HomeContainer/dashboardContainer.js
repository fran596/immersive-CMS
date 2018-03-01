import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class dashboardContainer extends React.Component {

  constructor(props) {
    super(props);
}
  
  render(){
    var cont= 0;
    return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h1>Recent activity</h1>
          {
            this.props.activity.map(function(item){
              ++cont;
              if(cont <= 2){
                return <p key={cont}>{item}</p>
              }
              
            })
          }
        </div>
        <div className="col-md-6">
          <h1>Mundo</h1>
        </div>
      </div>
    </div>
)}
}

dashboardContainer.propTypes = {
  activity: PropTypes.array
}

dashboardContainer.defaultProps = {
  activity: []
}

function mapStateToProps(state) {
  return {
      pages: state.page.pages,
      activity: state.page.activity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(dashboardContainer);
