import React, { useRef, useState } from 'react';
import { Animated, Easing, View, Dimensions } from 'react-native';
import { useDidMount } from '../../hooks/useDidMount';
import { getRandom } from '../../utils';

import { styles } from './Styles';

const numberOfBalls = 25;
const numberOfExplosions = 5;
const duration = 1000;

interface FireworksStateModel {
    x: number[];
    y: number[];
}

export const Fireworks: React.FC = () => {
    const [state, setState] = useState<FireworksStateModel>({
        x: [],
        y: [],
    });
    const fadingOpacity = useRef(new Animated.Value(1)).current;
    const movingBall = useRef(new Animated.Value(0)).current;

    useDidMount(() => {
        setExplosionSpots();
    });

    const setExplosionSpots = () => {
        const x: number[] = [];
        const y: number[] = [];

        for (let i = 0; i < numberOfExplosions; i++) {
            x[i] = getRandom(Dimensions.get('window').width);
            y[i] = getRandom(Dimensions.get('window').height);
        }
        setState({ x, y });

        animateOpacity();
        animateBall();
    };

    const animateOpacity = () => {
        fadingOpacity.setValue(1);
        Animated.timing(fadingOpacity, {
            toValue: 0,
            duration,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start(() => setExplosionSpots());
    };

    const animateBall = () => {
        movingBall.setValue(0);
        Animated.timing(movingBall, {
            toValue: 1,
            duration,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    };

    const getBalls = () => {
        const randomTops: Animated.AnimatedInterpolation[] = [];
        const randomLefts: Animated.AnimatedInterpolation[] = [];
        const randomColors: string[] = [];

        for (let i = 0; i < numberOfBalls; i++) {
            randomTops[i] = movingBall.interpolate({
                inputRange: [0, 1],
                outputRange: [100, getRandom(200)],
            });
            randomLefts[i] = movingBall.interpolate({
                inputRange: [0, 1],
                outputRange: [100, getRandom(200)],
            });
            randomColors[i] = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
        }

        const ballOpacity = fadingOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
        });

        const ballAnimatedStyle = (index: number): Animated.Animated => {
            return {
                top: randomTops[index],
                left: randomLefts[index],
                opacity: ballOpacity,
                backgroundColor: randomColors[index],
            };
        };

        return Array(numberOfBalls)
            .fill('')
            .map((_, index) => <Animated.View key={index} style={[styles.ball, ballAnimatedStyle(index)]} />);
    };

    const getFirework = () => {
        const { x, y } = state;

        return (
            <View style={styles.wrapper}>
                {Array(numberOfExplosions)
                    .fill('')
                    .map((_, index) => (
                        <Animated.View
                            key={index}
                            style={{
                                top: y[index],
                                left: x[index],
                            }}
                        >
                            <View style={styles.explosionBoundary}>{getBalls()}</View>
                        </Animated.View>
                    ))}
            </View>
        );
    };

    return <View style={styles.container}>{getFirework()}</View>;
};
