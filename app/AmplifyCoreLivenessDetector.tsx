import React from "react";
import { Amplify } from "aws-amplify";
import { FaceLivenessDetectorCore, AwsCredentialProvider } from "@aws-amplify/ui-react-liveness";
import "@aws-amplify/ui-react/styles.css";
import { Theme, ThemeProvider } from "@aws-amplify/ui-react";
// import { LivenessError } from "@aws-amplify/ui-react-liveness/dist/types/components/FaceLivenessDetector/service";
// import {
//   FaceLivenessDetectorComponents
// } from "@aws-amplify/ui-react-liveness/dist/types/components/FaceLivenessDetector/shared/DefaultStartScreenComponents";
// import {
//   LivenessDisplayText
// } from "@aws-amplify/ui-react-liveness/dist/types/components/FaceLivenessDetector/displayText";

Amplify.configure({});

/**
 * Configuration for the AWS Amplify FaceLivenessDetectorCore component
 */
export interface AmplifyCoreLivenessDetectorConfiguration {
    sessionId: string,
    region: string,
    credentialProvider: AwsCredentialProvider,
    onAnalysisComplete: () => Promise<void>,
    onError: (error) => void,
    onUserCancel: () => void,
    disableStartScreen?: boolean,
  }
  
  /**
   * Customization for the AWS Amplify FaceLivenessDetectorCore component
   * Refer - https://ui.docs.amplify.aws/react/connected-components/liveness/customization
   */
  export interface AmplifyCoreLivenessDetectorCustomization {
    components: any,
    displayText: any,
    theme: Theme
  }

  export interface IProps {
    configuration: AmplifyCoreLivenessDetectorConfiguration,
    customization: Partial<AmplifyCoreLivenessDetectorCustomization>,
  }
  
  export function AmplifyCoreLivenessDetector (props: IProps) {
    const {
      sessionId,
      region,
      credentialProvider,
      onAnalysisComplete,
      onError,
      disableStartScreen,
      onUserCancel
    } = props.configuration;

    const {
      components,
      displayText,
      theme,
    } = props.customization;
  
    console.log(credentialProvider, { credentialProvider });
    return <ThemeProvider theme={theme}>
      <FaceLivenessDetectorCore
        sessionId={sessionId}
        onAnalysisComplete={onAnalysisComplete}
        region={region}
        config={{ credentialProvider }}
        components={components}
        displayText={displayText}
        onError={onError}
        disableStartScreen={disableStartScreen}
        onUserCancel={onUserCancel}
      />
    </ThemeProvider>;
  }