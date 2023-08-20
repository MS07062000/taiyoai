import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const Map = () => {
    const countriesQuery = useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
            const response = await axios.get('https://disease.sh/v3/covid-19/countries');
            return response.data;
        },
        staleTime:900000,
        refetchInterval: 900000,
    })

    if (countriesQuery.isLoading) {
        return (<div className="border-16 border-solid border-lightGray border-t-16 border-blue-500 rounded-full w-120 h-120 animate-spin"></div>);
    }
    if( countriesQuery.isError ) return (<h1>Error loading data!!!</h1>)

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
                <TileLayer
                    attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {countriesQuery.data.map((country: any) => (
                    <Marker position={[country.countryInfo.lat, country.countryInfo.long]} key={country.countryInfo._id}>
                        <Popup>
                            <table>
                                {Object.keys(country).map((parameter: string) => (
                                    parameter !== 'countryInfo' && (
                                        <tr key={parameter}>
                                            <td>{parameter}</td>
                                            <td>{country[parameter]}</td>
                                        </tr>
                                    )
                                ))}
                            </table>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    )
}

export default Map;