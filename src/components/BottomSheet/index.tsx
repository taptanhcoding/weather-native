import React, {FC, ReactElement, useCallback, useMemo} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {AnimateStyle, SharedValue} from 'react-native-reanimated';


import {AppBottomSheetProps} from './type';

// import {Portal} from '@components';

const AppBottomSheetComponent = ({
  bottomSheetRef,
  snapPointsCustom,
  hiddenBackdrop,
  useBottomSheetView,
  enablePanDownToClose,
  onClose,
  children,
  contentHeight,
  backgroundColor,
  handleHeight,
  onChange,
  index = -1,
  onAnimated,
  enableDynamicSizing = false,
  ...otherProps
}: AppBottomSheetProps) => {
  const snapPoints = useMemo(() => ['20%'], []);
  

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );
  return (
    // <Portal hostName={'Bottom-Sheet'}>
      <BottomSheet
        enableDynamicSizing={enableDynamicSizing}
        snapPoints={snapPointsCustom ?? snapPoints}
        onClose={onClose}
        ref={bottomSheetRef}
        contentHeight={contentHeight}
        handleHeight={handleHeight}
        onChange={onChange}
        onAnimate={onAnimated}
        handleIndicatorStyle={{
          backgroundColor: backgroundColor ?? '#fff',
        }}
        handleStyle={styles.handleStyle(backgroundColor) as ViewStyle}
        backdropComponent={hiddenBackdrop ? null : renderBackdrop}
        enablePanDownToClose={enablePanDownToClose ?? true}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={true}
        enableOverDrag={false}
        index={index}
        style={styles.shadowStyle}
        {...otherProps}>
        {useBottomSheetView ? (
          <BottomSheetScrollView
            scrollEnabled={false}
            style={
              styles.bottomSheetStyle as StyleProp<
                AnimateStyle<StyleProp<ViewStyle>>
              >
            }>
            {children}
          </BottomSheetScrollView>
        ) : (
          <View style={{flex:1,backgroundColor:backgroundColor ?? '#fff'}} >
            {children}
          </View>
        )}
      </BottomSheet>
    // </Portal>
  );
};

export const AppBottomSheet = React.memo(AppBottomSheetComponent);

const styles =  
  StyleSheet.create({
    shadowStyle: {
      // backgroundColor: 'transparent',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      // backgroundColor:'red',
      elevation: 24,
    },
    bottomSheetStyle: {
      backgroundColor: '#fff',
      flex: 1,
    } as ViewStyle,
    handleStyle: (backgroundColor: any) =>
      ({
        // display: 'none',
        backgroundColor: backgroundColor ?? '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        // backgroundColor:'red'
      } as ViewStyle),
  });
