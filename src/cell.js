import * as colors from 'material-ui/lib/styles/colors'
import {Card, CardTitle} from 'material-ui/lib'
import React, {Component} from 'react'
import {Cell as FlexrCell} from 'react-flexr'
import {SIZES} from './sizes'
import {LastUpdated} from './last-updated'

export class Cell extends Component {

  render () {
    const {children, onPoll, value, width} = this.props
    const kids = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        children,
        onPoll,
        value
      })
    })

    return (
      <FlexrCell
        palm={SIZES[width].palm}
        lap={SIZES[width].lap}
        desk={SIZES[width].desk}
        style={{padding: '0', marginBottom: 22, transition: 'width .5s ease-in-out'}}>
          <div
            style={{padding: '0', margin: '0 11px'}}>
            <Card style={{height: '29vh', background: colors.indigo500, position: 'relative'}}>
              {kids}
              {this.props['last-updated'] ? <LastUpdated /> : null}
            </Card>
          </div>
      </FlexrCell>
    )
  }
}
