import { environment } from '../environments/environment';

export const ApiEndPoint = {
   indentApiUrl:environment.apiBaseEndPoint+'/indent'
   ,openIndentApiUrl:environment.apiBaseEndPoint+'/indent'+'/openindent'
   ,draftOpenApiUrl:environment.apiBaseEndPoint+'/indent'+'/draftopen'
   
   ,measurementBookApiUrl:environment.apiBaseEndPoint+'/measurementbook'
   ,openmeasurementBookApiUrl:environment.apiBaseEndPoint+'/measurementbook'+'/openmeasurementbook'
   ,draftOpenmeasurementBookApiUrl:environment.apiBaseEndPoint+'/measurementbook'+'/draftopen'

   ,masterRegisterUrl:environment.apiBaseEndPoint+'/masterregister'
  
};