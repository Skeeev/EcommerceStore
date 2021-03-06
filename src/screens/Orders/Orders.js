import React, { memo, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { CardList, OrderCard, LoadingSpinner } from 'src/components';
import styles from './Orders.styles';

export const Orders = memo(
  ({
    list,
    loading,
    fetchOrderHistory,
    refreshOrderHistory,
    clearOrderHistory,
    navigation: { navigate }
  }) => {
    useEffect(() => {
      fetchOrderHistory();

      return clearOrderHistory;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOrderListRefresh = useCallback(() => refreshOrderHistory(), [refreshOrderHistory]);

    const handleCardPress = useCallback(() => navigate(ScreenName.Map), [navigate]);

    if (loading) {
      return <LoadingSpinner />;
    }

    return (
      <View style={styles.container}>
        <CardList
          data={list}
          listItemComponent={OrderCard}
          refreshing={loading}
          onCardPress={handleCardPress}
          onRefresh={handleOrderListRefresh}
        />
      </View>
    );
  }
);

Orders.displayName = ScreenName.Orders;
