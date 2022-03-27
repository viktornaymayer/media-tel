import { FC } from 'react';
import CityService from "../API/CityService"

type cityProps = {
  id: string
  name: string
}[]
type Props = {
  setUserCity: (cityId: string) => void
}

const SelectCity: FC<Props> = (props) => {
  const citiesResponse: cityProps = CityService.getCities()

  return (
    <select onChange={e => props.setUserCity(e.target.value)}>
      <option disabled selected>Choose the city</option>
      {citiesResponse.map(city => 
        <option value={city.id} key={city.id}>
          {city.name}
        </option>
      )}
    </select>
  )
}

export default SelectCity;
