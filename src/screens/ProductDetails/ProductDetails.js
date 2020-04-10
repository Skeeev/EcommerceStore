import React, { memo, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { ScreenName } from 'src/constants/screenNames';
import { colors } from 'src/assets/styles/colors';
import { ImageSwiper, Divider, Button, LikeButton, LoadingSpinner } from 'src/components';
import { ProductSection } from './components';
import styles from './ProductDetails.styles';

export const ProductDetails = memo(
  ({
    data: { images = [], name, oldPrice, price, description },
    loading,
    fetchProductDetails,
    clearDetails,
    route: {
      params: {
        data: { productId }
      }
    }
  }) => {
    useEffect(() => {
      fetchProductDetails({
        productId
      });

      return clearDetails;
    }, [fetchProductDetails, productId, clearDetails]);

    if (loading) {
      return <LoadingSpinner />;
    }

    return (
      <ScrollView>
        <View style={styles.mainInformationContainer}>
          <ImageSwiper height={320} images={images} />
          <Text style={styles.title}>{name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            {oldPrice && (
              <>
                <Text style={styles.oldPrice}>{oldPrice}</Text>
                <Text style={styles.discount}>Sale</Text>
              </>
            )}
          </View>
        </View>
        <Divider size={12} color={colors.gallery} />
        <ProductSection title="Description">
          <Text style={styles.description}>{description}</Text>
        </ProductSection>
        <View style={styles.buttonGroup}>
          <LikeButton
            containerStyle={StyleSheet.flatten([
              styles.buttonContainer,
              styles.wishListButtonContainer
            ])}
            buttonStyle={styles.button}
          />
          <Button
            title="Add To Cart"
            containerStyle={styles.buttonContainer}
            buttonStyle={StyleSheet.flatten([styles.button, styles.addToCartButton])}
          />
        </View>
      </ScrollView>
    );
  }
);

ProductDetails.displayName = ScreenName.ProductDetails;
