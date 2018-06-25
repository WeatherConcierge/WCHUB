import React from 'react'
import { Select, Icon, Button } from 'semantic-ui-react'


const countryOptions =  [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]

const Location = () => (
  <div className="location">

    <span class="badge badge-primary">New York City <Icon className="location-x" name="close"></Icon> </span>
    <span class="badge badge-primary">San Francisco <Icon className="location-x" name="close"></Icon></span>
    <span class="badge badge-primary">Boston <Icon className="location-x" name="close"></Icon></span>
    <Select placeholder='Select your country' options={countryOptions} />
    <Button>Add</Button>

  </div>
)

export default Location
