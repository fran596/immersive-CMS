import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Timeline, Card } from 'antd';

class dashboardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    let formatDate = this.formatDate
    var cont = 0;
    return (
      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-md-12 dashboard-card">
            <Card>
              <h3>Welcome back!</h3>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 dashboard-card">
            <Card title="Recent activity ">
              <Timeline>
                {
                  // this.props.activity.map(function(item){
                  //   ++cont;
                  //   if(cont <= 5){
                  //     return <Timeline.Item><p key={cont}>{item}</p></Timeline.Item>
                  //   }

                  // })

                  this.props.pages.map(function (item) {
                    ++cont;
                    if (cont <= 5) {
                      return (
                        <Timeline.Item key={cont}>
                          <p >Page "{item.title}" modified at
                            {" " + formatDate(new Date(item.updatedAt))}
                          </p>
                        </Timeline.Item>)
                    }

                  })

                }
              </Timeline>
            </Card>
          </div>
          <div className="col-md-6 dashboard-card">
            <Card title="At a glance">
              <p><i className="fa fa-file" aria-hidden="true" /> {this.props.pages.length} Pages</p>
            </Card>
          </div>
        </div>
      </div>
    )
  }
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
