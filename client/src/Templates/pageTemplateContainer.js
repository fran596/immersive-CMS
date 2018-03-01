import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/*Page actions */
import {getPages} from '../HomeContainer/Page/AddPage/Actions/Creators/actionCreators'

import PageTemplate from './pageTemplate'
import PageTemplateHeader from './pageTemplateHeader'

class pageTemplateContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.getPages()
    }

    render() {
        return (
          <div>
            <PageTemplateHeader pages={this.props.pages} />
            <div id="template-body" className="container-fluid">
              {
                <Switch>
                  {this.props.pages.map(function(page){
                 return (
                     page.home === true
                     ? <Route 
                       exact
                       path="/template" 
                       key={page._id} 
                       render={() => {
                        return (
                          <PageTemplate 
                            content={page.content} 
                            title={page.title}
                          />)
                        }
                    }
                     />
                   :<Route 
                     exact
                     path={'/template'+page.url} 
                     key={page._id} 
                     render={() => {
                        return (
                          <PageTemplate 
                            content={page.content} 
                            title={page.title}
                          />)
                        }
                    }
                   />
                )
                })}
                </Switch>
            }
            </div>
          </div>
        );
    }
}

pageTemplateContainer.propTypes = {
    pages: PropTypes.array,
    getPages: PropTypes.func,
    // history: PropTypes.object
}

pageTemplateContainer.defaultProps = {
    pages: [],
    getPages: () => { },
    // history: null
}

function mapStateToProps(state) {
    return {
        pages: state.page.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPages: () => dispatch(getPages())
        // loadData: () => {
        //     dispatch(fetchContact())
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(pageTemplateContainer);