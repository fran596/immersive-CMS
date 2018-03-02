import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Timeline, Card } from 'antd';

class dashboardContainer extends React.Component {

  constructor(props) {
    super(props);
}
  
  render(){
    var cont= 0;
    return(
    <div className="container-fluid home-container">
    <div className="row">
    <div className="col-md-12 dashboard-card">
    <Card>
      <h3>Welcome back!</h3>
    </Card>
    </div>
    </div>
      <div className="row">
        <div className="col-md-6">
        <Card title="Recent activity">
          <Timeline>
          {
            this.props.activity.map(function(item){
              ++cont;
              if(cont <= 5){
                return <Timeline.Item><p key={cont}>{item}</p></Timeline.Item>
              }
              
            })
          }
          </Timeline>
          </Card>
        </div>
        <div className="col-md-6">
          <Card title="At a glance">
            <p><i class="fa fa-file" aria-hidden="true"></i> {this.props.pages.length} Pages</p>
          </Card>
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
