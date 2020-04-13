import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ScreenName } from 'src/constants/screenNames';
import { colors } from 'src/assets/styles/colors';
import {
  GradientView,
  Divider,
  AndroidElement,
  BackButton,
  TouchableText,
  Link,
  Button
} from 'src/components';
import { FormInput } from 'src/components/Forms/Input';
import styles from './SignUp.styles';

export const SignUp = memo(({ handleSubmit, navigation: { navigate, goBack } }) => {
  const redirectToLoginScreen = useCallback(() => navigate(ScreenName.Login), [navigate]);

  return (
    <GradientView style={styles.gradientView}>
      <KeyboardAwareScrollView>
        <Divider size={7} color={colors.bostonBlue} />
        <AndroidElement>
          <BackButton containerStyle={styles.backButton} onPress={goBack} />
        </AndroidElement>
        <View style={styles.container}>
          <TouchableText style={styles.title}>Ecommerce Store</TouchableText>
          <FormInput name="fullName" placeholder="Full Name" style={styles.input} />
          <FormInput name="email" placeholder="Email Address" style={styles.input} />
          <FormInput secureTextEntry name="password" placeholder="Password" style={styles.input} />
          <FormInput
            secureTextEntry
            name="confirmPassword"
            placeholder="Confirm Password"
            style={[styles.input, styles.confirmPasswordInput]}
          />
          <Button
            title="Sign up"
            containerStyle={styles.submitButton}
            textStyle={styles.submitButtonText}
            onPress={handleSubmit}
          />
          <Link
            title="Already have account? Sign In"
            style={styles.signInLink}
            onPress={redirectToLoginScreen}
          />
        </View>
      </KeyboardAwareScrollView>
    </GradientView>
  );
});

SignUp.displayName = ScreenName.SignUp;
