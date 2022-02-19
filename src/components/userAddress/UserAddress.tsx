import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDidMount } from '../../hooks/useDidMount';
import { useDidUpdate } from '../../hooks/useDidUpdate';
import MapView, { Address, LatLng, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Styles';
import { Typography } from '../typography/Typography';

export const UserAddress: React.FC = () => {
    const [location, setLocation] = useState<LatLng | undefined>(undefined);
    const [locationError, setLocationError] = useState<string>('');
    const [myAddress, setMyAddress] = useState<string>('');
    const mapsRef = useRef<MapView>(null);

    useDidMount(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                });
            },
            (error) => {
                console.log(error.code, error.message);
                setLocationError('error.message');
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    });

    const getAddress = async (): Promise<Address> =>
        mapsRef.current?.addressForCoordinate({ latitude: location?.latitude, longitude: location?.longitude }) as Promise<Address>;

    useDidUpdate(async () => {
        const { countryCode, administrativeArea, locality, name }: Address = await getAddress();
        setMyAddress(`${countryCode}, ${administrativeArea}, ${locality} ${name}`);
    }, [location]);

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04,
                    }}
                    ref={mapsRef}
                >
                    <Marker coordinate={location as LatLng} title={myAddress}>
                        <Icon name="place" size={24} color={'#DD6B55'} />
                    </Marker>
                </MapView>
            ) : (
                <Typography variant="error">{locationError}</Typography>
            )}
        </View>
    );
};
