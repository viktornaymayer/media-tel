import { FC } from 'react';
import CityService from "../API/CityService"

type cityProps = {
  id: string
  name: string
}[]
type Props = {
  userCityId?: string
  setUserCity: (cityId: string) => void
}

const SelectCity: FC<Props> = (props) => {
  const citiesResponse: cityProps = CityService.getCities()
  const defaultVal = props.userCityId || 'Choose the city'

  return (
    <select
      defaultValue={defaultVal}
      onChange={e => props.setUserCity(e.target.value)}>
      <option disabled value={'Choose the city'}>Choose the city</option>
      {citiesResponse.map(city => 
        <option value = {city.id} key = {city.id}>
          {city.name}
        </option>
      )}
    </select>
  )
}

export default SelectCity;
