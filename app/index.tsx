import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    AmplifyCoreLivenessDetector,
    AmplifyCoreLivenessDetectorConfiguration,
    AmplifyCoreLivenessDetectorCustomization
} from "./AmplifyCoreLivenessDetector";
import { AwsCredentialProvider } from "@aws-amplify/ui-react-liveness";

const SESSION_ID = "c64e59a6-a593-4ece-b8b3-6346f5cffd69";
const REGION = "ap-south-1";
const credentialProvider: AwsCredentialProvider = async () => Promise.resolve({
    accessKeyId: "ASIAW25I73GTSYZHLOE2",
    secretAccessKey: "1j6frbkiKooNOX/m54Ca8Zkv1PPCVn73wMcNIy3z",
    sessionToken: "IQoJb3JpZ2luX2VjEPH//////////wEaCmFwLXNvdXRoLTEiRzBFAiAQZCm1htckQ9WzrqNkEvnr8GTq2pHdBgLK8SqIs3aGWQIhAPsujtnQR6iNKWW+GKzXpSij6IHXtTyttCqKb5YEDZNRKroCCOr//////////wEQBRoMNDcwMTE2NDU2ODcxIgx/8oaEw4LjGJYrkjAqjgK4WOvxJnKGBPHNC2rsno22NMCGKzrcWLaXphmBjX0Z5IKolwOzUMuF0vxCRvt00vGGAKFo0DvAj2qwpEdpqEStl8oOcNmmnncKt3VeCBEzBYEpBJ51eoliES9QNj9l9QDfUEQIokfUKSig1f3/tqtdgKZhpfjaPOLBlWu3608nikd5KXRQSoCJ0PRUKM1Cyehjs93Qj+qYu7cTBoGbrrBXMadTM/q+wyp185t76sJkVapCNlAQRz88smIyR1WO9ynef6IEMl6hHur0WavDfbeHvfsOkY2E9hvohf92U0+XJ28muJGkt9npNKIpXE6OvYj42vlLMvGUqhXB6odH/fDs2Ge/iS7i9/YTsjcOVjgwj7P8tQY6nQEs6JTiI1pPWzeN8HccZ6rRjN621e11Ot55f2Qhc5UoRTw5L32XbNlYlGfxJHdgNDAz35dgItlq/gsum5w0wBd9X5nljdWJZ3tQ2E3NY8kw0I6tZjOuNszFq1T69jkN877Vd06gCvNBqkB4qWAPPGKmHOJMfvutnqisIiYQFf0LUXjcBgMNkgpTthIc141lTWMeLVryJxlHAk77sjp7"
}
);

const CONFIGURATION: AmplifyCoreLivenessDetectorConfiguration = {
    sessionId: SESSION_ID,
    region: REGION,
    credentialProvider: credentialProvider,
    onError: (error) => {
        console.log(error);
    },
    onUserCancel: () => {
        console.log("User cancelled");
    },
    onAnalysisComplete: function (): Promise<void> {
        throw new Error("Function not implemented.");
    }
};

const CUSTOMIZATION: Partial<AmplifyCoreLivenessDetectorCustomization> = {};


 const renderLiveness = ({sessionId, credentialProvider}) => {
    const configuration = {...CONFIGURATION};
    configuration.credentialProvider = credentialProvider;
    configuration.sessionId = sessionId;
    console.log("Calling with provided confiuration,", sessionId, credentialProvider);
    ReactDOM.render(<AmplifyCoreLivenessDetector
        configuration={configuration}
        customization={CUSTOMIZATION} />, document.getElementById('root'));
 }

(function(global){
    global["shin"] = global["shin"] || {};
    global["shin"]["renderLiveness"] = renderLiveness;
    // console.log(global);
    return global["shin"];
})(typeof window !== "undefined" ? window : this);

export default renderLiveness;