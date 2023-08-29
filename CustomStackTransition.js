// --> Custom card animation transition for full modals if needed.
    const CustomModalTransition = {
        ...TransitionPresets.ModalSlideFromBottomIOS,
        cardStyleInterpolator: ({ current, next, layouts }) => {
            const translateY = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
            });

            const scale = next ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.90],
            }) : 1;

            const borderRadius = current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 35],
            });

            return {
                cardStyle: {
                    transform: [{ translateY }],
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                },

                overlayStyle: {
                    opacity: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 0.5],
                    }),
                },
                
                containerStyle: {
                    transform: [{ scale }],
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                },
            };
        },
        gestureDirection: 'vertical',
        cardOverlayEnabled: true,
        gestureEnabled: true,
        headerShown: false,
    };
