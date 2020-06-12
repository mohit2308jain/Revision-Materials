import {useState, useEffect} from 'react';

const useLatHook = () => {
    const [lat,setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLatitude(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }

    useEffect(() => {
        fetchLocation()
    }, [])

    return [lat, errorMessage];
}

export default useLatHook;
