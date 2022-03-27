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
  return (
    <select onChange={e => props.setUserCity(e.target.value)}>
      <option disabled selected={props.userCityId ? false : true}>Choose the city</option>
      {citiesResponse.map(city => 
        <option
          value = {city.id}
          key = {city.id}
          selected = {props.userCityId === city.id ? true : false}>
          {city.name}
        </option>
      )}
    </select>
  )
}

export default SelectCity;
